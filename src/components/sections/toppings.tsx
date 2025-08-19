'use client'

import { useEffect, useState } from 'react'
import type { HomeToppings } from '@/sanity/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Props = {
  data: HomeToppings
}

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export default function Toppings({ data }: Props) {
  const [isMobile, setIsMobile] = useState(false)
  const [tappedIndex, setTappedIndex] = useState<number | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const items = data.items ?? []
  const perSlide = isMobile ? 6 : 9
  const chunks = chunk(items, perSlide)

  return (
    <div className="grid grid-cols-12 lg:gap-4 gap-2 lg:mb-40">
      <div className="lg:col-span-4 lg:col-start-2 col-start-3 col-span-9">
        <h2 className="title uppercase mb-4 title-scale">{data.title}</h2>
        <p className="mb-6">{data.blurb}</p>
      </div>
      <div className="col-span-8 col-start-3 lg:col-span-6 lg:col-start-4 relative">
        <div className="lg:max-w-[900px] mx-auto lg:p-20 relative">

        {/* Left Arrow */}
          <div className="swiper-button-prev">
          </div>
          {/* Right Arrow */}
          <div className="swiper-button-next">
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={true}
            slidesPerView={1}
            speed={500}
          >
            {chunks.map((group, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`grid lg:gap-4 gap-2 h-full ${
                    isMobile ? 'grid-cols-2 grid-rows-3' : 'grid-cols-3 grid-rows-3'
                  }`}
                >
                  {group.map((item, j) => {
                    const isTapped = isMobile && tappedIndex === j

                    return (
                      <div
                        key={j}
                        className="relative group text-black overflow-hidden flex items-center justify-center aspect-square m-2"
                        onClick={() => {
                          if (isMobile) {
                            setTappedIndex(j === tappedIndex ? null : j)
                          }
                        }}
                      >
                        <div
                          className={`z-0 absolute inset-0 flex items-center justify-center text-center transition-opacity duration-300 ${
                            isMobile ? (isTapped ? 'opacity-100' : 'opacity-0') : ''
                          }`}
                        >
                          <div>
                            <p className='sml-title-scale leading-4 lg:leading-7 capitalize'>{item.title}</p>
                            <p className='sml-title-scale leading-4 lg:leading-7 title uppercase'>{item.subTitle}</p>
                          </div>
                        </div>

                        {item.image?.asset && (
                          <Image
                            src={urlFor(item.image).width(400).height(400).url()}
                            alt={item.image.alt || item.title || 'Topping'}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={`object-cover transition-opacity duration-300 ease-in-out ${
                              isMobile
                                ? isTapped
                                  ? 'opacity-0'
                                  : 'opacity-100'
                                : 'group-hover:opacity-0 group-focus:opacity-0'
                            }`}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
