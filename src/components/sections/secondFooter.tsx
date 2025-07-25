import type { HomeFooter, SiteSettings } from '@/sanity/types'
import Marquee from 'react-fast-marquee'

type Props = {
  data: HomeFooter
  siteSettings: SiteSettings
}

export default function SecondFooter({data, siteSettings}: Props) {
  console.log(siteSettings)
  return (
    <div>
      <div className="grid grid-cols-12 lg:gap-4 gap-2  mb-4 lg:mt-48 mt-24 mx-[1rem] lg:mx-0">
        <div className='lg:col-span-2 lg:col-start-2 col-span-12'>
          <span className='hidden lg:block'>&copy;yobae 2025</span>
          <span className='lg:hidden'><a href={siteSettings.instagram} target='_blank' rel="noopener noreferrer">@yobae_au</a></span>
        </div>
        <div className="lg:col-span-2 lg:col-start-9 col-span-6">
          <span className=''><a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a></span>
        </div>
        <div className='lg:col-span-1 lg:col-start-12 flex justify-end lg:pr-8 col-span-6'>
          <span className='hidden lg:block'><a href={siteSettings.instagram} target='_blank' rel="noopener noreferrer">@yobae_au</a></span>
          <span className='lg:hidden'>&copy;yobae 2025</span>
        </div>

      </div>
      <div>
        {data.marquee && (
          <div className="home-marquee bg-black text-white p-2">
            <Marquee autoFill={true}>
              {Array.isArray(data.marquee)
                ? data.marquee.map((item, idx) => <span className={`w-[400px] block text-center ${idx % 2 ? '' : 'm-bold'}`} key={idx}>{item}</span>)
                : data.marquee}
            </Marquee>
          </div>
        )}
      </div>
    </div>
  )
}

