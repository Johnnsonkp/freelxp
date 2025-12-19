export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  try {
    // Create abort controller with manual timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`Image fetch failed: ${response.status} for ${url}`);
      return res
        .status(response.status)
        .json({ error: "Failed to fetch image from origin", status: response.status });
    }

    // Copy the content type from the original image
    const contentType = response.headers.get("content-type") || "image/webp";

    // Stream the image back to the client
    res.setHeader("Content-Type", contentType);

    // Cache the proxied image
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

    // Add CORS headers to prevent issues
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");

    // Pipe the response body to the client
    const body = await response.arrayBuffer();
    return res.status(200).send(Buffer.from(body));
  } catch (err) {
    // Handle timeout specifically
    if (err.name === 'AbortError' || err.name === 'TimeoutError') {
      console.error("Proxy timeout:", url);
      return res.status(504).json({ error: "Gateway timeout", message: "Image request timed out" });
    }
    
    console.error("Proxy error:", err);
    return res.status(500).json({ error: "Proxy failed", details: err.message });
  }
}
