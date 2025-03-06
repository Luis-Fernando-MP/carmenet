'use client'

import { CARMENET_STORE } from '@/shared/constants'
import { newKey } from '@/shared/key'
import { Image } from '@unpic/react'
import UseWineStoreStore from '@wines/store/useWineStore'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import type { JSX } from 'react'

import { wines } from '../../store/wines'
import './style.scss'
import './userMobile.scss'

const SelectedWine = (): JSX.Element | null => {
  const { wineId } = UseWineStoreStore()
  if (!(wineId in wines)) return null
  const { background, notes, pairing, mix, moreInfo } = wines[wineId]

  return (
    <article className='selectedWine' id='wine-detail'>
      <motion.section
        className='selectedWine-image'
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, once: true }}
      >
        <Image src={background} alt={`${wineId} background`} layout='fullWidth' />
      </motion.section>

      <section className='selectedWine-details'>
        <motion.div
          className='selectedWine-notes'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Notas de cata</h3>
          <p dangerouslySetInnerHTML={{ __html: notes }} />
        </motion.div>

        <motion.div
          className='selectedWine-pairing'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Maridaje perfecto</h3>
          <ul className='selectedWine-list'>
            {pairing.map((item, index) => (
              <motion.li
                className='selectedWine-listItem'
                key={newKey()}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 1 + index * 0.1 }}
              >
                <p>{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className='selectedWine-pairing'>
          <h3>Mezcla</h3>
          <ul className='selectedWine-list'>
            {mix.map((item, index) => (
              <motion.li
                className='selectedWine-listItem'
                key={newKey()}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 1.2 + index * 0.1 }}
              >
                <p dangerouslySetInnerHTML={{ __html: item }} />
              </motion.li>
            ))}
          </ul>
        </div>

        <div className='selectedWine-pairing'>
          <h3>Información técnica</h3>
          <ul className='selectedWine-list'>
            {moreInfo.map((info, index) => (
              <motion.li
                className='selectedWine-listItem'
                key={newKey()}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 1.3 + index * 0.1 }}
              >
                <p>{info}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 2 }}>
          <Link href={CARMENET_STORE} className='selectedWine-link active'>
            <ShoppingCart />
            Comprar en Cellar 8
          </Link>
        </motion.div>
      </section>
    </article>
  )
}

export default SelectedWine
