import { CARMENET_WEBSITE } from '@/shared/constants'
import { Image } from '@unpic/react'
import { GlobeIcon } from 'lucide-react'
import Link from 'next/link'
import type { JSX } from 'react'

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
        <Image src='/logoV2.svg' layout='fullWidth' alt='carmenet logo' />
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
      </div>
    </nav>
  )
}

export default Nav
