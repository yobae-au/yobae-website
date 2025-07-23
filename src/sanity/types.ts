export type SiteSettings = {
  _id: string
  _type: 'siteSettings'
  metaTitle?: string
  metaDescription?: string
  email?: string
  instagram?: string
  facebook?: string
  appStoreUrl?: string
  googlePlayUrl?: string
  locations?: {
    title?: string
    location?: string
    store?: string
    street?: string
    suburb?: string
  }[]
}

export type HomeIntro = {
  _id: string
  _type: 'homeIntro'
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  marquee?: string[]
}

export type HomeStory = {
  _id: string
  _type: 'homeStory'
  title?: string
  blurb?: string
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
}

export type HomeFlavours = {
  _id: string
  _type: 'homeFlavours'
  title?: string
  blurb?: string
  items?: {
    title?: string
    titleTwo?: string
    subtitle?: string
    primaryImage?: {
      asset: { _ref: string; _type: 'reference' }
      alt?: string
    }
    secondaryImage?: {
      asset: { _ref: string; _type: 'reference' }
      alt?: string
    }
  }[]
}

export type HomeToppings = {
  _id: string
  _type: 'homeToppings'
  title?: string
  blurb?: string
  items?: {
    title?: string
    subTitle?: string
    image?: {
      asset: { _ref: string; _type: 'reference' }
      alt?: string
    }
  }[]
}

export type HomeFooter = {
  _id: string
  _type: 'homeFooter'
  title?: string
  blurb?: string
  offers?: {
    name?: string
    value?: string
  }[]
  marquee?: string[]
}
