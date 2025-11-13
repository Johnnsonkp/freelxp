import Image from 'next/image';
import {ShimmerPlaceholder} from './ShimmerPlaceholder';
import { useState } from 'react';

const SmoothImgLoad = ({ src, alt, className, sizes, fill, width, height }) => {
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
      />
    </>
  );
};

export default SmoothImgLoad