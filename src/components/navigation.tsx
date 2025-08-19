'use client'

import type { SiteSettings} from '@/sanity/types'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import h_logo from '../../public/h_logo.png'

type Props = {
  data: SiteSettings
}

export function Navigation({ data }: Props) {
  const [open, setOpen] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      setShowLogo(scrollY > window.innerHeight) // shows after 1vh
    }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
  return (
    <>
      <div className='fixed lg:top-[2rem] lg:left-[2rem] top-[1rem] left-[1rem] fake-1-col  z-50'>  
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 w-[100%]"
          aria-label="Toggle menu"
        >
          <div className="menu-icon w-[35%]">
            <div className={`menu-icon__cheeckbox relative ${open ? 'open' : ''}`}>
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 z-40 md:w-[400px] md:h-[600px] w-full h-full bg-[#171717] text-white shadow-lg transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-[110%]'
        }`}>
        <div className="relative h-full p-8">
          <div className="flex flex-col items-center justify-center gap-6 text-xl text-center h-full">
            {/* Links */}
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
            {/* <Link
              to="toppings"
              smooth
              duration={600}
              offset={-80}
              onClick={() => setOpen(false)}
              className="cursor-pointer title capitalize"
            >
              THE TOPPINGS
            </Link> */}
            <Link
              to="yoclub"
              smooth
              duration={600}
              offset={-80}
              onClick={() => setOpen(false)}
              className="cursor-pointer title capitalize"
            >
              JOIN THE YO CLUB!
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
          <div className="absolute bottom-6 left-0 right-0 text-center text-sm opacity-80">
            <a href={data.instagram} target="_blank" rel="noopener noreferrer">@yobae_au</a>
          </div>
        </div>
      </div>
      {/* <div className='fixed fake-1-col top-[6rem] left-[2rem] z-5'>
        <div className='w-[35%]'>
          <Image src={h_logo} alt="Logo" />
        </div>
      </div> */}
      <div
        className={`fixed fake-1-col lg:top-[6rem] lg:left-[2rem]  top-[4rem] left-[1rem] z-5 transition-opacity duration-500 ${
          showLogo ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-[35%] min-w-[28px]">
          <Image src={h_logo} alt="Logo" />
        </div>
      </div>
    </>
  )
}