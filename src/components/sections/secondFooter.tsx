import type { HomeFooter, SiteSettings } from '@/sanity/types'
import Marquee from 'react-fast-marquee'

type Props = {
  data: HomeFooter
  siteSettings: SiteSettings
}

export default function SecondFooter({data, siteSettings}: Props) {
  return (
    <div>
    <div className=''>
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

