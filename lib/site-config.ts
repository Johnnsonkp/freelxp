export interface NavigationLink {
  title: string
  href?: string
  pageId?: string
}

export interface SiteConfig {
  rootNotionPageId?: string
  rootNotionSpaceId?: string

  name: string
  siteLogoTitle?: string
  siteLogo?: string | any
  domain: string
  author: string
  description?: string
  profileDescriptionTitle?: string
  profileDescription?: string
  language?: string

  twitter?: string
  github?: string
  linkedin?: string
  newsletter?: string
  youtube?: string
  zhihu?: string
  mastodon?: string

  defaultPageIcon?: string | null
  defaultPageCover?: string | null
  defaultPageCoverPosition?: number | null

  isPreviewImageSupportEnabled?: boolean
  isTweetEmbedSupportEnabled?: boolean
  isRedisEnabled?: boolean
  isSearchEnabled?: boolean

  includeNotionIdInUrls?: boolean
  pageUrlOverrides?: any
  pageUrlAdditions?: any

  navigationStyle?: string
  navigationLinks?: Array<NavigationLink>
}


export const siteConfig = (config: SiteConfig): SiteConfig => {
  return config
}