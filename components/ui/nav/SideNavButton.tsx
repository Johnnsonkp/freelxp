import Link from 'next/link';
import React from 'react'

function SideNavButton({ href, iconSrc, tooltipText }: { href: string, iconSrc: string, tooltipText: string }) {
  return (
    <Link href={href} className="relative group">
      <img src={iconSrc} alt="job tracker" className="m-auto border-y-2 dark:border-darkBorder my-1 w-[100%] h-10"/>
      <span className="pointer-events-none absolute left-full top-1/2 z-40 -translate-y-1/2 ml-2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
        {tooltipText}
      </span>
    </Link>
  )
}

export default SideNavButton