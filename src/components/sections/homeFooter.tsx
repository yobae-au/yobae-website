import type { HomeFooter, SiteSettings } from '@/sanity/types'

type Props = {
  data: HomeFooter
  siteSettings: SiteSettings
}

export default function HomeFooter({ data, siteSettings  }: Props) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className='col-start-2 col-span-11'>
          <h2 className="text-2xl title">{data.title}</h2>
        </div>
        <div className='col-start-2 col-span-4'>
          <p className="text-base">{data.blurb}</p>
        </div>
        {data.offers?.map((offer, index) => (
          <div className='col-start-2 col-span-7 border-t-1' key={index}>
            <p className="text-base">{offer.name}</p>
            <p className='title'>{offer.value}</p>
          </div>
        ))}
        <div className="col-start-2 col-span-2">
          <h2 className='title'>LOCATIONS</h2>
        </div>
       {siteSettings.locations?.map((location, index) => {
        // Compute col-start: 7 → 9 → 11 → 7 → ...
        const colStart = 7 + (index % 3) * 2;
        return (
          <div className={`col-span-2 col-start-${colStart}`} key={index}>
            <p className="title">{location.location}</p>
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
