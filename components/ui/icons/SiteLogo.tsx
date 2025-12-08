import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import siteConfig from '../../../site.config'

function SiteLogo({hideTitle}: {hideTitle?: boolean}) {
  const siteLogo = siteConfig.siteLogo;
  const siteLogoTitle = siteConfig.siteLogoTitle;

  return (
    <Link href="/" className="flex align-middle justify-center items-center">
      <h1 className={`font-bold mt-1 text-lg ${hideTitle? 'hidden' : 'block'}`}>{siteLogoTitle}</h1>
      <Image src={siteLogo} className={" py-0 px-0 w-9 bg-[#F5F5F5] rounded-[10rem]"} alt="logo"/>
    </Link>
  )
}

export default SiteLogo