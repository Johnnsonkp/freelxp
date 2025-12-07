import Image from 'next/image';
import {ShimmerPlaceholder} from './ShimmerPlaceholder';
import { useState } from 'react';

/**
 * @typedef {Object} SmoothImgLoadProps
 * @property {string | import('next/image').StaticImageData} src - Image source URL or static import
 * @property {string} alt - Alt text for the image
 * @property {string} [className] - Additional CSS classes
 * @property {string} [sizes] - Responsive image sizes
 * @property {boolean} [fill] - Whether to fill the parent container
 * @property {number} [width] - Image width in pixels
 * @property {number} [height] - Image height in pixels
 * @property {boolean} [priority] - Whether to prioritize image loading
 * @property {number} [quality] - Image quality (1-100)
 */

/**
 * @param {SmoothImgLoadProps} props
 */
const SmoothImgLoad = ({ src, alt, className, sizes, fill, width, height, priority, quality, onMouseEnter, onMouseLeave }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? null : (<ShimmerPlaceholder />)}

      <Image
        fill={fill || false}
        src={src}
        alt={alt}
        onLoadingComplete={() => setLoaded(true)}
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-in-out`}
        sizes={sizes || undefined}
        width={width || undefined}
        height={height || undefined}
        priority={priority || false}
        quality={quality || 75}
      />
    </>
  );
};

export default SmoothImgLoad