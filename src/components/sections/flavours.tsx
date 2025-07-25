import type { HomeFlavours } from '@/sanity/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { useEffect, useState } from 'react'

type Props = {
  data: HomeFlavours
}

export default function Flavours({ data }: Props) {
  const [tappedIndex, setTappedIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 640)
      check()
      window.addEventListener('resize', check)
      return () => window.removeEventListener('resize', check)
    }, [])
    
  return (
    <div className="grid grid-cols-12 lg:gap-4 gap-2 lg:relative lg:top-[-300px] lg:mx-0 mx-4">
      <div className="col-span-10 col-start-3 lg:col-span-4 lg:col-start-2">
        <h2 className="title mb-4 title-scale">{data.title}</h2>
        <p className=" mb-6">{data.blurb}</p>
      </div>

      <div className="col-span-8 col-start-3 lg:mt-24 lg:col-span-6 lg:col-start-4 grid grid-cols-6 lg:gap-y-12 gap-y-2">
        {data.items?.map((item, index) => {
          const primary = item.primaryImage
          const secondary = item.secondaryImage
          const colStartClass = index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-5'

          const isTapped = isMobile && tappedIndex === index

          return (
            <div
              key={index}
              className={`col-span-12 lg:col-span-2 ${colStartClass} mb-8`}
            >
              {primary?.asset && (
                <div
                  className="relative group w-full max-w-[200px] lg:max-w-[300px] mx-auto overflow-hidden rounded"
                  onClick={() => {
                    if (isMobile) {
                      setTappedIndex(tappedIndex === index ? null : index)
                    }
                  }}
                >
                  <Image
                    src={urlFor(primary).url()}
                    alt={primary.alt || item.title || 'Flavour Image'}
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover transition duration-300 ease-in-out ${
                      isMobile
                        ? isTapped
                          ? 'blur-sm'
                          : ''
                        : 'group-hover:blur-md group-focus:blur-md'
                    }`}
                  />

                  {secondary?.asset && (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ width: '80%', margin: '0 auto' }}>
                      <Image
                        src={urlFor(secondary).url()}
                        alt={secondary.alt || item.title || 'Flavour Alternate'}
                        width={280}
                        height={330}
                        className={`transition duration-300 ease-in-out object-cover rounded ${
                          isMobile
                            ? isTapped
                              ? 'opacity-100'
                              : 'opacity-0'
                            : 'opacity-0 group-hover:opacity-100 group-focus:opacity-100'
                        }`}
                      />
                    </div>
                  )}
                </div>
              )}
              <div className="text-center mt-4">
                <h3 className="title-scale leading-4 lg:leading-5">{item.title}</h3>
                <h3 className="title uppercase title-scale">{item.titleTwo}</h3>
                <p className="lg:my-4 my-2">{item.subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
