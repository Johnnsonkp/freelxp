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
  // profileDescription: "Hi, I'm Chinonso John Nkpolukwu, you can call me John! I'm a passionate software developer and vacation rental host with a deep love for all things tech.",
  profileDescription: "Hi, I'm John, a Software Engineer with 3 years, a Master of Computer Science student and a Vacation Rental Host at @citystaysmelbourne. I specialise in building scalable applications. Follow me as I document my journey in the tech industry, my studies and my various other passions.",
  description: 'Software Engineer & Python Developer sharing insights on full-stack development, machine learning, and automation. Follow my programming journey, one blog post at a time.',

  introSectionData: [
    {
      // icon: "https://img.icons8.com/?size=100&id=4zYjb7lh1HOO&format=png&color=000000",
      icon: "https://img.icons8.com/?size=100&id=qQEmBWcJr3TX&format=png&color=000000",
      iconPadding: true,
      text: "For more info check out my",
      linkObj: {
        href: "/about",
        text: "bio",
        src: "/icons/user-icon.svg",
        alt: "User Icon",
        externalLink: false
      }
    },
    {
      // icon: "https://img.icons8.com/?size=100&id=ZDYUQgA0xkCJ&format=png&color=000000",
      icon: "https://img.icons8.com/?size=100&id=NK7WZ47r1Kwf&format=png&color=000000",
      iconPadding: true,
      text: "You can find my latest projects",
      linkObj: {
        href: "/projects",
        text: "here",
        src: "/icons/project-icon.svg",
        alt: "Project Icon",
        externalLink: false
      }
    },
    {
      icon: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg",
      iconPadding: true,
      text: "My Airbnb profile",
      linkObj: {
        href: "https://www.airbnb.com.au/users/show/447493012",
        text: "here",
        src: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg",
        alt: "Airbnb Logo",
        externalLink: true
      }
    },
    {
      icon: "https://citystaysmelbourne.com/wp-content/uploads/2023/07/Transparent-Logo-1536x1090.png",
      iconPadding: false,
      text: "My Direct booking website",
      linkObj: {
        href: "https://citystaysmelbourne.com",
        text: "here",
        src: "https://citystaysmelbourne.com/wp-content/uploads/2023/07/Transparent-Logo-1536x1090.png",
        alt: "City Stays Melbourne Logo",
        externalLink: true
      }
    }
  ],

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
  ],

  jobTrackerPin: '0962'
})
