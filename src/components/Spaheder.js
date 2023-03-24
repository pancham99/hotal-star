import React, { useEffect, useState } from 'react'

// logo
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg"

const Spaheader = () => {
  const [spaheaders, setSpaheaders] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSpaheaders(true) : setSpaheaders(false)
    })
  })
  return (
    <>
      <header className={`${spaheaders ? 'bg-orange-50 py-6' : 'bg-transparent py-8'} fixed z-50 transition-all duration-500 w-full `}>
        <div className='spa_container mx-auto flex flex-col items-center gap-y-6 lg:flex-row  lg:justify-between lg:gap-y-0'>
          <a href='/'>
            {spaheaders ? <img className='w-[160px]' src={LogoDark} /> : <img className='w-[160px]' src={LogoWhite} />}
          </a>

          {/* navigation */}
          <nav className={`${spaheaders ? 'text-primary' : 'text-white'}  mr-4 flex gap-x-4 uppercase items-center tracking-[3px]  font-tertiary text-[15px] lg:gap-x-8`}>
            <a href='' className='hover:text-accent transition'>
              FIND A SPA
            </a>
            <a href='' className='hover:text-accent transition'>
              GIFT A SPA
            </a>
            <a href='' className='hover:text-accent transition'>
              MEMBERSHIP
            </a>
            <a href='' className='hover:text-accent transition'>
              SERVICES
            </a>
            <a>
              EVENTS
            </a>
            <a href='' className='hover:text-accent transition'>
              ABOUT
            </a>
            <a>
            <button className='btn btn-lg btn-primary mx-auto'>Book an appointment</button>
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Spaheader