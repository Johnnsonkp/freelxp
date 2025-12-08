import React from 'react'
import SiteLogo from '../icons/SiteLogo'
import siteConfig from '../../../site.config'

function SideNav() {

  return (
    <div className='border h-100vh mt-[-54px] w-12 shadow-md'>
      <SiteLogo hideTitle={true} />

      <div className='mt-7 flex-col gap-2'>
        <button className='border-2 w-[100%] h-10'>Home</button>
        <button className='border-2 w-[100%] h-10'>Home</button>
        <button className='border-2 w-[100%] h-10'>Home</button>
        <button className='border-2 w-[100%] h-10'>Home</button>
      </div>
    
    </div>
  )
}

export default SideNav