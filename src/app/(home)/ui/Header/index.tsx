import { Image } from '@unpic/react'
import { WineIcon } from 'lucide-react'
import type { JSX } from 'react'

import './style.scss'

const Header = (): JSX.Element => {
  return (
    <section className='header home-section'>
      <div className='header-logo'>
        <Image src='/logoV3.svg' alt='carmenet logo' layout='fullWidth' />
      </div>
      <h1 className='header-title'>
        En la victoria lo mereces, en la derrota <span className='font3'>lo necesitas</span>
      </h1>
      <p className='header-paragraph'>
        Más que un vino, Es una experiencia que despierta los sentidos. Cada sorbo es una invitación a vivir el lujo de los
        pequeños momentos, donde el tiempo se ralentiza y los sabores cobran vida.
      </p>
      <button className='header-go active'>
        <WineIcon />
        Descubre el placer
      </button>
    </section>
  )
}

export default Header
