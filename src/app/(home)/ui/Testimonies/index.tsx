'use client'

import { newKey } from '@/shared/key'
import FontTitle from '@/shared/ui/FontTitle'
import { Image } from '@unpic/react'
import { motion } from 'framer-motion'
import type { JSX } from 'react'

import './style.scss'
import './userMobile.scss'

const testimonies = [
  {
    phrase:
      '"Los vinos de Carmenet representan la esencia de Sonoma County. Su Cabernet Sauvignon es un ejemplo sobresaliente de lo que esta región puede ofrecer."',
    author: 'Robert Parker',
    rol: 'Fundador de The Wine Advocate',
    photo: '/images/testimonies/RobertParker.jpg'
  },
  {
    phrase:
      '"Carmenet ha logrado un equilibrio perfecto entre tradición e innovación. Su compromiso con la calidad es evidente en cada botella."',
    author: 'Jancis Robinson',
    rol: 'Escritora de vinos y Master of Wine',
    photo: '/images/testimonies/JancisRobinson.jpeg'
  },
  {
    phrase:
      '"Carmenet está produciendo algunos de los Chardonnays más elegantes y equilibrados que he probado de California en los últimos años."',
    author: 'Eric Asimov',
    rol: 'Crítico de vinos del New York Times',
    photo: '/images/testimonies/EricAsimov.webp'
  },
  {
    phrase:
      '"Los vinos de Carmenet capturan la esencia de Sonoma con una precisión impresionante. Su Pinot Noir es particularmente notable por su finura y complejidad."',
    author: 'Elaine Chukan Brown',
    rol: 'Escritora de vinos para JancisRobinson',
    photo: '/images/testimonies/ElaineChukanBrown.jpg'
  }
]

const Testimonies = (): JSX.Element => {
  return (
    <section className='testimonies home-section'>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <FontTitle principal='Lo que' secondary='Dicen de nosotros' />
      </motion.div>

      <article className='testimonies-bento'>
        <motion.div
          className='mainGradient testimonies-gradient'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        {testimonies.map((testimony, index) => {
          const { phrase, author, rol, photo } = testimony
          return (
            <div className='testimonies-item border' key={newKey()}>
              <motion.p
                className='testimonies-phrase'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                {phrase}
              </motion.p>

              <motion.div
                className='testimonies-author'
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              >
                <Image src={photo} alt={author} layout='fullWidth' />
                <motion.div
                  className='testimonies-info'
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                >
                  <h4>{author}</h4>
                  <p>{rol}</p>
                </motion.div>
              </motion.div>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Testimonies
