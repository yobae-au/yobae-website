'use client'

import type { SiteSettings, HomeIntro, HomeStory, HomeFlavours, HomeToppings, HomeFooter } from '@/sanity/types'
import {Element } from 'react-scroll'
import Flavours from './sections/flavours'
import Intro from './sections/intro'
import Story from './sections/story'
// import Toppings from './sections/toppings'
import HomeFooterSection from './sections/homeFooter'
import SecondFooter from './sections/secondFooter'

type Props = {
  siteSettings: SiteSettings
  homeIntro: HomeIntro
  homeStory: HomeStory
  homeFlavours: HomeFlavours
  homeToppings: HomeToppings
  homeFooter: HomeFooter
}

export function HomePage({  
 siteSettings,
  homeIntro,
  homeStory,
  homeFlavours,
  // homeToppings,
  homeFooter, }: Props) {
  
  // console.log('[siteSettings]', siteSettings)
  // console.log('[homeIntro]', homeIntro)
  // console.log('[homeStory]', homeStory)
  // console.log('[homeFlavours]', homeFlavours)
  // console.log('[homeToppings]', homeToppings)
  // console.log('[homeFooter]', homeFooter)

  return (
    <div className="scroll-smooth">
      <Element name="intro">
        <section className="min-h-screen flex items-center justify-center">
          <Intro data={homeIntro} />
        </section>
      </Element>

      <Element name="story">
        <section className="min-h-screen flex items-center justify-center">
          <Story data={homeStory} />
        </section>
      </Element>

      <Element name="flavours">
        <section className="min-h-screen flex items-center justify-center">
          <Flavours data={homeFlavours}/>
        </section>
      </Element>

      {/*  Remember the Menu. */}
      {/* <Element name="toppings">
        <section className="min-h-screen flex items-center justify-center">
          <Toppings data={homeToppings} />
        </section>
      </Element> */}

      <Element name="yoclub">
        <section className="min-h-screen flex items-center justify-center">
          <HomeFooterSection data={homeFooter} siteSettings={siteSettings}/>
        </section>
      </Element>
      <Element name="locations">
        <section>
          <SecondFooter data={homeFooter} siteSettings={siteSettings} />
        </section>
      </Element>
    </div>
  )
}
