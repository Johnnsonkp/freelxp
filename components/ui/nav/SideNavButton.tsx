import Link from 'next/link';
import React from 'react'

function SideNavButton({ href, iconSrc, tooltipText, className, target }: { href: string, iconSrc: string, tooltipText: string, className?: string, target?: string }) {
  return (
    <Link href={href} target={target} className={`relative group`}>
      <div className='w-[100%] p-1 border-b-2'>
        <img src={iconSrc} alt="job tracker" className={`m-auto my-0 w-[100%] h-12 ${className || ''}`}/>
        <span className="pointer-events-none absolute left-full top-1/2 z-40 -translate-y-1/2 ml-2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          {tooltipText}
        </span>
      </div>
    </Link>
  )
}

export default SideNavButton