import {Card} from '../card'
import {IntroSectionDataItem} from '../../../lib/site-config'
import Link from 'next/link'
import React from 'react'

interface LinksCardMdProps {
  data: IntroSectionDataItem['introSectionData'];
}

function LinksCardMd({data}: LinksCardMdProps) {
  return (
    <Card className="p-2 bg-accent/20 border-accent flex-[4] dark:bg-dark2 dark:border-darkBorder shadow-md">
      {data && data.map((item, index) => (
        <div className="space-y-2" key={index}>
          <p className="text-foreground flex items-center gap-1 ">
            <div className={`w-7 h-6 border border-accent border-transparent rounded-full flex items-center justify-center ${item?.iconPadding ? 'px-1' : ''}`}>
              {item.icon && <img src={item.icon} alt={item.linkObj.alt || ''} className="m-auto"/>}
            </div>
            <span className='text-sm'>
              {item.text}{" "}
              <Link 
                target={item.linkObj.externalLink ? "_blank" : "_self"}
                rel={item.linkObj.externalLink ? "noreferrer" : undefined}
                href={item.linkObj.href}
                className="text-accent underline hover:text-accent/80 transition-colors font-medium">
                {item.linkObj.text} 
              </Link>.
            </span>
          </p>
          <hr className='border-accent dark:border-darkBorder my-0 py-0'></hr>
        </div>
      ))}
    </Card>
  );
}

export default LinksCardMd