'use client'

import type { SiteSettings, HomeIntro, HomeStory, HomeFlavours, HomeToppings, HomeFooter } from '@/sanity/types'
import {Element } from 'react-scroll'
import Flavours from './sections/flavours'
import Intro from './sections/intro'
import Story from './sections/story'
import Toppings from './sections/toppings'
import HomeFooterSection from './sections/homeFooter'

type Props = {
  siteSettings: SiteSettings
  homeIntro: HomeIntro
  homeStory: HomeStory
  homeFlavours: HomeFlavours
  homeToppings: HomeToppings
  homeFooter: HomeFooter
}

export function HomePage({  
 // siteSettings,
  homeIntro,
  homeStory,
  homeFlavours,
  homeToppings,
  homeFooter, }: Props) {
  
  // console.log('[siteSettings]', siteSettings)
  console.log('[homeIntro]', homeIntro)
  // console.log('[homeStory]', homeStory)
  // console.log('[homeFlavours]', homeFlavours)
  // console.log('[homeToppings]', homeToppings)
  // console.log('[homeFooter]', homeFooter)

  return (
    <div className="scroll-smooth">
      <Element name="intro">
        <section className="min-h-screen flex items-center justify-center bg-red-200">
          <Intro data={homeIntro} />
        </section>
      </Element>

      <Element name="story">
        <section className="min-h-screen flex items-center justify-center bg-green-200">
          <Story data={homeStory} />
        </section>
      </Element>

      <Element name="flavours">
        <section className="min-h-screen flex items-center justify-center bg-blue-200">
          <Flavours data={homeFlavours}/>
        </section>
      </Element>

      <Element name="toppings">
        <section className="min-h-screen flex items-center justify-center bg-yellow-200">
          <Toppings data={homeToppings} />
        </section>
      </Element>

      <Element name="footer">
        <section className="min-h-screen flex items-center justify-center bg-purple-200">
          <HomeFooterSection data={homeFooter} />
        </section>
      </Element>
    </div>
  )
}
