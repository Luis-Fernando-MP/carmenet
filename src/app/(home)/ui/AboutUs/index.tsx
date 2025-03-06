'use client'

import FontTitle from '@/shared/ui/FontTitle'
import { motion } from 'framer-motion'
import type { JSX } from 'react'

import './style.scss'
import './userMobile.scss'

const AboutUs = (): JSX.Element => {
  return (
    <section className='aboutUs home-section' id='aboutUs'>
      <motion.h4
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        CAR‑MEN‑AY
      </motion.h4>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <FontTitle principal='Sobre' secondary='Nosotros' />
      </motion.div>

      <article className='aboutUs-bento'>
        {[
          {
            title: { sub: 'Nuestra', main: 'Historia' },
            text: 'Vinos de Carácter Distintivo. CARMENET (pronunciado "Car‑men‑ay") es una colección de vinos de California, fundada en 1983, que encarna el arte de mezclar y su capacidad para lograr resultados de máxima calidad.'
          },
          {
            title: { sub: 'Nuestros', main: 'Vinos' },
            text: 'Carmenet Reserve produce vinos que todos pueden disfrutar y compartir con familiares y amigos alrededor de la mesa. Procedentes directamente de viñedos familiares en Lodi, California, nuestros vinos son elegantes, consistentes y accesibles.'
          }
        ].map((item, index) => (
          <motion.div
            key={item.title.main}
            className='aboutUs-item border'
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
          >
            <div className='aboutUs-item__tile'>
              <h4>{item.title.sub}</h4>
              <h2>{item.title.main}</h2>
            </div>
            <p className='aboutUs-item__paragraph'>{item.text}</p>
          </motion.div>
        ))}

        <motion.div
          className='aboutUs-item border'
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <h2>Reconocimientos</h2>
          <p className='aboutUs-item__paragraph'>
            CARMENET ha sido reconocida como una Rising Star por Beverage Dynamics desde 2015 y destacada como Hot Prospect en el
            boletín Shanken Impact durante cuatro años consecutivos (2015-2018) en la categoría de vinos nacionales.
          </p>
        </motion.div>
      </article>
    </section>
  )
}

export default AboutUs
