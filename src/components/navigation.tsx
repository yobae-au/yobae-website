'use client'

import type { SiteSettings} from '@/sanity/types'
import { useState } from 'react'
import { Link } from 'react-scroll'

type Props = {
  data: SiteSettings
}

export function Navigation({ data }: Props) {
  const [open, setOpen] = useState(false)


  // console.log('[siteSettings - data]', data)

  return (
    <>
      {/* Toggle Button */}
      <div className='fixed top-4 left-4 z-50 p-2 '>

      <button
        onClick={() => setOpen(!open)}
        className="text-white bg-[#2F2A1C] rounded-md text-2xl leading-none"
        aria-label="Toggle menu"
        >
        {open ? 'O' : 'X'}
      </button>
      <h1 className="origin-left rotate-90 whitespace-nowrap">Yo Bae</h1>
      </div>

      {/* Slide-out menu panel */}
      <div
        className={`fixed top-16 left-4 z-40 w-[400px] h-[600px] bg-[#2F2A1C] text-white shadow-lg transition-transform duration-300 ${
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
    </>
  )
}
