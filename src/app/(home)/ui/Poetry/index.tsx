'use client'

import Counter from '@/shared/components/Counter'
import { motion } from 'framer-motion'
import type { JSX } from 'react'

import './style.scss'

const Poetry = (): JSX.Element => {
  return (
    <article className='poetry'>
      <div className='mainGradient poetry-gradient' />
      <section className='poetry-wrapper home-section'>
        <motion.h1
          className='poetry-title'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          El vino es <span className='font3'>poesía</span> embotellada
        </motion.h1>

        <motion.p
          className='poetry-paragraph'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          En CARMENET, cada cosecha es un nuevo verso en nuestra historia. Un legado de cinco generaciones que han dedicado su
          vida a la búsqueda de la excelencia vinícola.
        </motion.p>

        <ul className='poetry-stats'>
          {[
            { number: '138', text: 'Años de historia' },
            { number: '15,000', text: 'Barricas de roble francés' },
            { number: 'X5', text: 'Generaciones de vinicultores' }
          ].map((stat, index) => (
            <li key={stat.text} className='poetry-stat'>
              <Counter number={stat.number} duration={2 + index * 0.5} />
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 + index * 0.2 }}
              >
                {stat.text}
              </motion.p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Poetry
