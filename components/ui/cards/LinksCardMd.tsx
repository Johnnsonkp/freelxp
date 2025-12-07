import {Card} from '../card'
import Link from 'next/link'
import React from 'react'

interface LinkObj {
  href: string;
  text: string;
  externalLink?: boolean;
  alt?: string;
}

interface LinkItem {
  icon?: string;
  text: string;
  linkObj: LinkObj;
}

interface LinksCardMdProps {
  data: LinkItem[];
}

function LinksCardMd({data}: LinksCardMdProps) {
  return (
    <Card className="p-2 bg-accent/20 border-accent flex-[4] dark:bg-dark2 dark:border-darkBorder shadow-md">
      {data && data.map((item, index) => (
        <div className="space-y-2" key={index}>
          <p className="text-foreground flex items-center gap-1 ">
            <div className="w-7 h-6 border border-white rounded-full px-1 flex items-center justify-center">
              {item.icon && <img src={item.icon} alt={item.linkObj.alt || ''} className="m-auto"/>}
            </div>
            <span className='text-sm'>
              {item.text}{" "}
              <Link 
                target={item.linkObj.externalLink ? "_blank" : "_self"}
                rel={item.linkObj.externalLink ? "noreferrer" : undefined}
                href={item.linkObj.href}
                className="text-accent underline hover:text-accent/80 transition-colors font-bold">
                {item.linkObj.text} 
              </Link>.
            </span>
          </p>
          <hr className='border-gray-100 my-0 py-0'></hr>
        </div>
      ))}
    </Card>
  );
}

export default LinksCardMd