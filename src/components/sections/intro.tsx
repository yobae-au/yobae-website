import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { urlFor } from '@/sanity/lib/image'
import type { HomeIntro } from '@/sanity/types'

type Props = {
  data: HomeIntro
}

export default function Intro({ data }: Props) {
  const primaryImage = data.image
  const mobileImage = data.mobileImage

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Full-screen Background Image */}
        {mobileImage?.asset && (
          <Image
          src={urlFor(mobileImage).url()}
          alt={mobileImage.alt || 'Intro Image'}
          width={1920}
          height={1080}
          priority
          className="absolute inset-0 w-full h-full object-cover lg:hidden"
          />
        )}

      

        {primaryImage?.asset && (
          <Image
          src={urlFor(primaryImage).url()}
          alt={primaryImage.alt || 'Intro Image'}
          width={2496}
          height={1404}
          priority
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          />
        )}
  

      {/* Marquee overlay at 75% down */}
      {data.marquee && (
        <div className="absolute left-0 w-full bottom-[10%] home-marquee bg-black text-white p-2">
          <Marquee autoFill={true}>
            {Array.isArray(data.marquee)
              ? data.marquee.map((item, idx) => <span className={`w-[400px] block text-center ${idx % 2 ? '' : 'm-bold'}`} key={idx}>{item}</span>)
              : data.marquee}
          </Marquee>
        </div>
      )}
    </div>
  )
}
