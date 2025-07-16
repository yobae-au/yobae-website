import type { HomeFlavours } from '@/sanity/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Props = {
  data: HomeFlavours
}

export default function Flavours({ data }: Props) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 col-start-2">
        <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
        <p className="text-base mb-6">{data.blurb}</p>
      </div>

      <div className="col-span-6 col-start-4 grid grid-cols-6 gap-y-12">
        {data.items?.map((item, index) => {
          const primary = item.primaryImage
          const secondary = item.secondaryImage

          const colStartClass = index % 2 === 0 ? 'col-start-1' : 'col-start-5'

          return (
            <div
              key={index}
              className={`col-span-2 ${colStartClass}`}
            >
              {primary?.asset && (
                <div className="relative group w-full max-w-[300px] mx-auto overflow-hidden rounded">
                  <Image
                    src={urlFor(primary).url()}
                    alt={primary.alt || item.title || 'Flavour Image'}
                    width={400}
                    height={400}
                    className="object-cover transition duration-300 ease-in-out group-hover:blur-sm group-focus:blur-sm"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {secondary?.asset && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={urlFor(secondary).width(200).height(200).url()}
                        alt={secondary.alt || item.title || 'Flavour Alternate'}
                        width={200}
                        height={200}
                        className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300 ease-in-out object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-lg mb-1">{item.title}</h3>
                <h3 className="text-lg font-bold mb-1">{item.titleTwo}</h3>
                <p className="text-sm text-gray-700 mb-2">{item.subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
