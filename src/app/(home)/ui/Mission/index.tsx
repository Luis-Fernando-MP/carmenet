'use client'

import FontTitle from '@/shared/ui/FontTitle'
import { Image } from '@unpic/react'
import { motion } from 'framer-motion'
import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css'
import type { JSX } from 'react'

import './style.scss'
import './userMobile.scss'

const Mission = (): JSX.Element => {
  return (
    <section className='mission home-section' id='mission'>
      <motion.h4
        className='mission-slug'
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        CARMENET
      </motion.h4>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <FontTitle principal='Nuestra' secondary='Misión' />
      </motion.div>

      <motion.p
        className='mission-paragraph'
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        En Carmenet Reserve nos enorgullecemos de elaborar vinos consistentes y tradicionales de carácter distintivo. Nuestros
        vinos están impulsados por la calidad para consumidores inteligentes que desean disfrutar de elegantes vinos de California
        a la mitad de precio, lo que los convierte en un lujo asequible en botella.
      </motion.p>

      <section className='mission-video border'>
        <div className='mission-company border'>
          <motion.div className='mission-company__bronco' whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image src='/images/bronco-wine.png' alt='bronco wine logo' layout='fullWidth' />
          </motion.div>
          <motion.div
            className='mission-company__info'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3>Carmenet Vintners Reserve</h3>
            <p>Bronco Wine Company</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className='mission-videoPlayer'
        >
          <CldVideoPlayer
            src='/projects/xsqmmliqtll0rjkl3cg6'
            width='920'
            height='500'
            transformation={{
              crop: 'fill',
              gravity: 'center',
              width: 920,
              height: 500
            }}
          />
        </motion.div>
      </section>
    </section>
  )
}

export default Mission
