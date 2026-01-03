// use client to enable useEffect and useState
'use client';

import Link from 'next/link';
import React from 'react'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

function SideNavButton({ href, iconSrc, tooltipText, className, target }: { href: string, iconSrc: string, tooltipText: string, className?: string, target?: string }) {
  const [selected, setSelected] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if(pathname === href) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [pathname, href])

  return (
    <Link href={href} target={target} className={`relative group`}>
      <div className={`w-[100%] p-1 border-b-[1px] dark:border-darkBorder ${selected? 'bg-[#b9529c60]' : ''}`}>
        <img src={iconSrc} alt="job tracker" className={`m-auto my-0 w-[100%] h-12 ${className || ''}`}/>
        <span className="pointer-events-none absolute left-full top-1/2 z-40 -translate-y-1/2 ml-2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          {tooltipText}
        </span>
      </div>
    </Link>
  )
}

export default SideNavButton

