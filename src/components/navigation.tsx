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
    <div className="nav-col relative">
      {/* Toggle Button */}
      <div className='fixed top-[1rem] left-[1rem] z-5'>

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
        className={`fixed top-16 left-4 z-40 w-[400px] h-[600px] bg-[#2F2A1C] text-white shadow-lg transition-transform duration-300 z-10 ${
          open ? 'translate-x-0' : '-translate-x-[110%]'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full gap-6 p-8 text-xl">
          <Link
            to="story"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          >
            The Story
          </Link>
          <Link
            to="flavours"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          >
            The Flavours
          </Link>
          <Link
            to="toppings"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          >
            The Toppings
          </Link>
          <Link
            to="footer"
            smooth
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          >
            Join The Yo Club!
          </Link>
          <>{data.email}</>
        </div>
      </div>
    </div>
  )
}
