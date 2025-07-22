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
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 col-start-2">
        <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
        <p className="text-base mb-6">{data.blurb}</p>
      </div>
      <div className="col-span-6 col-start-4 relative p-20">
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
                className={`grid gap-4 h-full ${
                  isMobile ? 'grid-cols-2 grid-rows-3' : 'grid-cols-3 grid-rows-3'
                }`}
              >
                {group.map((item, j) => (
                  <div
                    key={j}
                    className="relative group text-black overflow-hidden flex items-center justify-center aspect-square"
                  >
                    <span className="z-0 text-sm font-medium absolute inset-0 flex items-center justify-center text-center">
                      {item.title}
                    </span>
                    {item.image?.asset && (
                      <Image
                        src={urlFor(item.image).width(400).height(400).url()}
                        alt={item.image.alt || item.title || 'Topping'}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0 group-focus:opacity-0"
                      />
                    )}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
