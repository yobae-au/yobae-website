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
      <div className="grid grid-cols-12 gap-4 px-4">
        <div className='col-span-2'>&copy;yobae 2025</div>
        <div className='col-span-3 col-start-10 flex justify-between'>
          <span className=''>hello@yobae.com.au</span>
          <span className=''>@yobae</span>
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

