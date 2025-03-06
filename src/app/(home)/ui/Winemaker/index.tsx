'use client'

import FontTitle from '@/shared/ui/FontTitle'
import { Image } from '@unpic/react'
import { motion } from 'framer-motion'
import type { JSX } from 'react'

import './style.scss'

const Winemaker = (): JSX.Element => {
  return (
    <section className='winemaker home-section' id='winemaker'>
      <motion.h4
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        JOHN ALLBAUGH
      </motion.h4>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <FontTitle principal='Nuestro' secondary='Enólogo' />
      </motion.div>

      <motion.div
        className='winemaker-author'
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image src='/images/winemaker.png' alt='winemaker John Allbaugh' layout='fullWidth' />
      </motion.div>

      <motion.h2
        className='winemaker-phrase'
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        "<span className='font3'>Quiero hacer vinos que todos puedan disfrutar</span>y compartir con familiares y amigos alrededor
        de la mesa"
      </motion.h2>

      <motion.p
        className='winemaker-paragraph'
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <span>John Allbaugh</span>, nacido en California, se graduó en Química en la Universidad Estatal de California,
        Stanislaus. Tras completar sus estudios, profundizó en viticultura y enología en la Universidad de California, Davis, y
        comenzó su trayectoria en la elaboración de vinos en 2005. Su pasión por la enología surge de los inolvidables momentos
        que ha compartido con amigos y familiares alrededor de una copa de vino.
      </motion.p>
    </section>
  )
}

export default Winemaker
