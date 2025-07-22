import { client } from '@/sanity/lib/client'
import { Navigation } from '@/components/navigation'
import { HomePage } from '@/components/homePage'

import type {
  SiteSettings,
  HomeIntro,
  HomeStory,
  HomeFlavours,
  HomeToppings,
  HomeFooter,
} from '@/sanity/types'

export default async function Page() {
  const [siteSettings, homeIntro, homeStory, homeFlavours, homeToppings, homeFooter] =
    await Promise.all([
      client.fetch<SiteSettings>(
        `*[_type == "siteSettings" && _id == "siteSettings"][0]`
      ),
      client.fetch<HomeIntro>(
        `*[_type == "homeIntro" && _id == "homeIntro"][0]`
      ),
      client.fetch<HomeStory>(
        `*[_type == "homeStory" && _id == "homeStory"][0]`
      ),
      client.fetch<HomeFlavours>(
        `*[_type == "homeFlavours" && _id == "homeFlavours"][0]`
      ),
      client.fetch<HomeToppings>(
        `*[_type == "homeToppings" && _id == "homeToppings"][0]`
      ),
      client.fetch<HomeFooter>(
        `*[_type == "homeFooter" && _id == "homeFooter"][0]`
      ),
    ])

  return (
    <div className="mx-[1rem]">
      <Navigation data={siteSettings} />
      <HomePage
        siteSettings={siteSettings}
        homeIntro={homeIntro}
        homeStory={homeStory}
        homeFlavours={homeFlavours}
        homeToppings={homeToppings}
        homeFooter={homeFooter}
      />
    </div>
  )
}
