import { SiteConfig, siteConfig } from "./lib/site-config"

import logo from './public/transparent-logo.png'

export default siteConfig({
  rootNotionPageId: process.env.NOTION_DATABASE_ID,

  // basic site info (required)
  name: 'Chinonso.io',
  siteLogoTitle: 'CHINONSO',
  siteLogo: logo,
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'chinonso.io',
  author: 'John Nkpolukwu',
  language: 'en',

  
  // open graph metadata (optional)
  profileDescriptionTitle: "💡 Hello World! 👋",
  profileDescription: "Hi, I'm Chinonso John Nkpolukwu—you can call me John! I'm a passionate software developer and vacation rental host with a deep love for all things tech.",
  description: 'Software Engineer & Python Developer sharing insights on full-stack development, machine learning, and automation. Follow my programming journey, one blog post at a time.',

  // social usernames (optional)
  github: 'Johnnsonkp',
  linkedin: 'john-nkpolukwu-521201138',
  youtube: '@chinonso_io',
  twitter: undefined,
  newsletter: undefined,

  // default notion icon and cover images for site-wide consistency (optional)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // feature flags
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  isSearchEnabled: true,
  isTweetEmbedSupportEnabled: false,

  // URL configuration
  includeNotionIdInUrls: false,
  pageUrlOverrides: null,
  pageUrlAdditions: null,

  // navigation configuration
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Projects',
      href: '/projects'
    },
    {
      title: 'Blog',
      href: '/blog'
    }
  ]
})
