'use client'

import type { SiteSettings} from '@/sanity/types'
import Image from 'next/image'
import { useState } from 'react'
import { Link } from 'react-scroll'
import h_logo from '../../public/h_logo.png'

type Props = {
  data: SiteSettings
}

export function Navigation({ data }: Props) {
  const [open, setOpen] = useState(false)


  // console.log('[siteSettings - data]', data)

  return (
    <div className=" relative">
      {/* Toggle Button */}
      <div className='fixed fake-1-col top-[2rem] left-[2rem] z-5'>

        <button
          onClick={() => setOpen(!open)}
          className="text-white bg-[#2F2A1C] rounded-md text-2xl leading-none"
          aria-label="Toggle menu"
          >
          {open ? 'O' : 'X'}
        </button>
        <div className='w-[35%]'>
          <Image src={h_logo} alt="Logo" />
        </div>
      </div>

      {/* Slide-out menu panel */}
   <div
      className={`fixed top-16 left-4 z-40 w-[400px] h-[600px] bg-[#171717] text-white shadow-lg transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-[110%]'
      }`}
    >
      <div className="relative h-full p-8">
        {/* Centered Menu Items */}
        <div className="flex flex-col items-center justify-center gap-6 text-xl text-center h-full">
          <Link
            to="story"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer title capitalize"
          >
            THE STORY
          </Link>
          <Link
            to="flavours"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer title capitalize"
          >
            THE FLAVOURS
          </Link>
          <Link
            to="toppings"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer title capitalize"
          >
            THE TOPPINGS
          </Link>
          <Link
            to="yoclub"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer title capitalize"
          >
            JOIN THE JO CLUB!
          </Link>
          <Link
            to="locations"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer title capitalize"
          >
            LOCATIONS
          </Link>
        </div>

        {/* Email pinned to bottom */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-sm opacity-80">
          <a href={data.instagram} target="_blank" rel="noopener noreferrer">@yobae</a>
        </div>
      </div>
    </div>

    </div>
  )
}
