import type { HomeFooter, SiteSettings } from '@/sanity/types'
import Image from 'next/image';
import apple_app from '../../../public/Apple_app.svg'
import google_play from '../../../public/Google_play.svg'
import { urlFor } from '@/sanity/lib/image'

type Props = {
  data: HomeFooter
  siteSettings: SiteSettings
}

export default function HomeFooter({ data, siteSettings  }: Props) {
  const locations = siteSettings.locations ?? []
  const primaryImage = data.image
  // Repeat locations to ensure at least 5
  const paddedLocations = Array.from({ length: 3 }, (_, i) => locations[i % locations.length]) // TODO

  return (
    <div className='yo-club'>
      <div className="grid grid-cols-12 lg:gap-4 gap-2">
        <div className='lg:col-start-2 lg:col-span-11 col-start-3 col-span-9'>
          <h2 className="title big-title-scale">{data.title}</h2>
        </div>
        <div className='lg:col-start-2 lg:col-span-4 col-start-3 col-span-9 my-24'>
          <p className="">{data.blurb}</p>
        </div>
        <div className='lg:col-start-1 lg:col-span-7 col-start-3 col-span-9'>
          <div className="relative z-20 fake-1-col-margin">
            {data.offers?.map((offer, index) => (
              <div className={` border-b-1 py-4 ${index === 0 ? 'border-t-1' : ''}`} key={index}>
                <p className="title-scale leading-[1.1]">{offer.name}</p>
                <p className='title title-scale leading-[1.1] uppercase'>{offer.value}</p>
              </div>
            ))}
          </div>
          <div className="relative fake-1-col-margin">
            <div className=' flex lg:gap-4 gap-2 lg:mt-24 mt-12 mb-12 lg:mb-0'>
              <a href={siteSettings.appStoreUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  className="dark:invert"
                  src={apple_app}
                  alt="Apple App Store Download"
                  width={180}
                  height={38}
                  priority
                />
              </a>
              <a href={siteSettings.googlePlayUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  className="dark:invert"
                  src={google_play}
                  alt="Google Play store Download"
                  width={180}
                  height={38}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
        {primaryImage?.asset && (
          <div className='lg:col-span-5 col-span-9 col-start-3 z-10'>
            <div className='lg:top-[-200px] lg:relative'>
              <Image
                src={urlFor(primaryImage).url()}
                alt={primaryImage.alt || 'Intro Image'}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
                />
            </div>
          </div>
        )}

        
        <div className="lg:col-start-2 lg:col-span-2 col-start-3 col-span-9 lg:mt-36 mt-16">
          <h2 className='title title-scale leading-[1]'>LOCATIONS</h2>
        </div>
       {paddedLocations.map((location, index) => {
        // Compute col-start: 7 → 9 → 11 → 7 → ...
        const colStart = ['lg:col-start-7', 'lg:col-start-9', 'lg:col-start-11'][index % 3];
        // TODO MOBILE.
        return (
          <div className={` lg:mt-36 mt-4 lg:col-span-2 ${colStart} col-start-3 col-span-9`} key={index}>
            <p className="title uppercase lg:mb-4">{location.title}</p>
            <p>{location.location}</p>
            <p>{location.store}</p>
            <p>{location.street}</p>
            <p>{location.suburb}</p>
          </div>
          
        );
        
      })}
      </div>
    </div>
  )
}
