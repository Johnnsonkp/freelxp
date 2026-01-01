import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import SideNavButton from './SideNavButton'
import SiteLogo from '../icons/SiteLogo'
import siteConfig from '../../../site.config'

function SideNav() {

  const [topMargin, setTopMargin] = useState('mt-[-54px]');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setTopMargin('mt-[-96px]');
      } else {
        setTopMargin('mt-[-55px]');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className={`h-[100vh] ${topMargin} w-14 shadow-md
    border-l border-r border-border dark:border-l dark:border-r dark:border-darkBorder flex-[6] dark:bg-dark2
    fixed z-50`}>
      <SiteLogo hideTitle={true} className="p-3"/>

      <div className={`h-[100vh] w-14 mt-10 shadow-md`}>
        <SideNavButton 
          href="/jobtracker"
          iconSrc="https://img.icons8.com/?size=100&id=UuZbMO5c0AHj&format=png&color=000000"
          tooltipText="Applications tracker"
        />
      </div>
    
    </div>
  )
}

export default SideNav