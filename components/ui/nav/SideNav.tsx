import React, { useEffect, useState } from 'react'

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
    border-border border dark:border-darkBorder flex-[6] dark:bg-dark2
    fixed`}>
      <SiteLogo hideTitle={true} className="p-3"/>

      <div className={`h-[100vh] w-14 mt-10 shadow-md`}>
        {/* <button className='border-2 my-1 w-[100%] h-10'>Home</button>
        <button className='border-2 my-1 w-[100%] h-10'>Home</button>
        <button className='border-2 my-1 w-[100%] h-10'>Home</button>
        <button className='border-2 my-1 w-[100%] h-10'>Home</button> */}
      </div>
    
    </div>
  )
}

export default SideNav