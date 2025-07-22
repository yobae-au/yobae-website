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
      <div className='fixed fake-1-col top-[1rem] left-[1rem] z-5'>

        <button
          onClick={() => setOpen(!open)}
          className="text-white bg-[#2F2A1C] rounded-md text-2xl leading-none"
          aria-label="Toggle menu"
          >
          {open ? 'O' : 'X'}
        </button>
        <div className='w-[50%]'>
          <Image src={h_logo} alt="Logo" />
        </div>
      </div>

      {/* Slide-out menu panel */}
   <div
      className={`fixed top-16 left-4 z-40 w-[400px] h-[600px] bg-[blue] text-white shadow-lg transition-transform duration-300 ${
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
            className="cursor-pointer title"
          >
            The Story
          </Link>
          <Link
            to="flavours"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer title"
          >
            The Flavours
          </Link>
          <Link
            to="toppings"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer title"
          >
            The Toppings
          </Link>
          <Link
            to="footer"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer title"
          >
            Join The Yo Club!
          </Link>
        </div>

        {/* Email pinned to bottom */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-sm opacity-80">
          {data.email}
        </div>
      </div>
    </div>

    </div>
  )
}
