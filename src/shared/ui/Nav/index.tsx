import { CARMENET_WEBSITE } from '@/shared/constants'
import { GlobeIcon } from 'lucide-react'
import Link from 'next/link'
import type { JSX } from 'react'

import LoadLogo from '../LoadLogo'
import ThemeChanger from '../ThemeChanger'
import './style.scss'

const links = {
  Misión: '/#mission',
  Nosotros: '/#aboutUs',
  Enólogo: '/#winemaker',
  vinos: '/wines'
}

const Nav = (): JSX.Element => {
  return (
    <nav className='nav'>
      <Link href='/' className='nav-logo'>
        <LoadLogo src='/logoV2' />
      </Link>

      <div className='nav-sites'>
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
