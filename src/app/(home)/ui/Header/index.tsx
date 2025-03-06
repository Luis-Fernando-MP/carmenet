'use client'

import { motion } from 'framer-motion'
import { WineIcon } from 'lucide-react'
import type { JSX } from 'react'

import './style.scss'
import './userMobile.scss'

const Header = (): JSX.Element => {
  return (
    <section className='header home-section'>
      <motion.h1
        className='header-title'
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        En la victoria lo mereces, en la derrota <span className='font3'>lo necesitas</span>
      </motion.h1>

      <motion.p
        className='header-paragraph'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Más que un vino, Es una experiencia que despierta los sentidos. Cada sorbo es una invitación a vivir el lujo de los
        pequeños momentos, donde el tiempo se ralentiza y los sabores cobran vida.
      </motion.p>

      <motion.button
        className='header-go active'
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <WineIcon />
        Descubre el placer
      </motion.button>
    </section>
  )
}

export default Header
