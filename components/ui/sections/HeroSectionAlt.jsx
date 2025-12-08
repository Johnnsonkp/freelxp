import './herosection.module.css';

import Image from 'next/image';

export const HeroSectionAlt = () => {
  return (
    <section className="cover-banner relative w-full max-w-[1250px] mx-auto h-[215px] overflow-hidden mt-0 cover-banner border-2 dark:border-darkBorder rounded-xl shadow-md">
      <Image
        src="/bannerImg2.png"
        alt="banner image"
        sizes="100vw"
        style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectPosition: "center 18.52%", objectFit: "cover"}}
        priority
        width={1200}
        height={220}
      />
      <div className="relative h-full flex flex-col items-end justify-center container mx-auto px-6" />
    </section>
  );
};
