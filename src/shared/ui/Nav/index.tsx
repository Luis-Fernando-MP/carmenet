'use client'

import { acl } from '@/shared/acl'
import { CARMENET_WEBSITE } from '@/shared/constants'
import { GlobeIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { type JSX, useState } from 'react'

import LoadLogo from '../LoadLogo'
import ThemeChanger from '../ThemeChanger'
import './style.scss'
import './userMobile.scss'

const links = {
  Misión: '/#mission',
  Nosotros: '/#aboutUs',
  Enólogo: '/#winemaker',
  vinos: '/wines'
}

const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='nav'>
      <div className='nav-logo'>
        <Link href='/'>
          <LoadLogo src='/logoV2' />
        </Link>
        <button className='nav-menu' onClick={handleOpen}>
          <MenuIcon />
        </button>
      </div>

      <div className={`nav-sites ${acl(isOpen, 'open')}`}>
        {Object.entries(links).map(link => {
          const [name, url] = link
          return (
            <Link href={url} key={name} className='nav-link'>
              {name}
            </Link>
          )
        })}

        <Link href={CARMENET_WEBSITE} className='nav-link active' target='_blank' rel='noopener noreferrer'>
          <GlobeIcon />
          Website
        </Link>
        <ThemeChanger />
      </div>
    </nav>
  )
}

export default Nav
