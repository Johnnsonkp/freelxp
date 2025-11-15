export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch image from origin" });
    }

    // Copy the content type from the original image
    const contentType = response.headers.get("content-type") || "image/webp";

    // Stream the image back to the client
    res.setHeader("Content-Type", contentType);

    // Cache the proxied image (not the Notion URL)
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

    // Pipe the response body to the client
    const body = await response.arrayBuffer();
    res.status(200).send(Buffer.from(body));
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Proxy failed", details: err.message });
  }
}
