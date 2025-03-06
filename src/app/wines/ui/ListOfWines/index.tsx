'use client'

import { acl } from '@/shared/acl'
import { Image } from '@unpic/react'
import UseWineStoreStore from '@wines/store/useWineStore'
import { motion } from 'framer-motion'
import type { JSX } from 'react'

import { wines } from '../../store/wines'
import './style.scss'

const ListOfWines = (): JSX.Element => {
  const { wineId, setWineId } = UseWineStoreStore()

  const handleClick = (key: keyof typeof wines) => {
    setWineId(key)
    const wineDetail = document.getElementById('wine-detail')
    if (wineDetail) {
      wineDetail.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className='listOfWines'>
      {Object.entries(wines).map(([key, wine], index) => {
        return (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.1
              }
            }}
            viewport={{ once: true }}
            key={`${key}-wines`}
            className={`listOfWines-item border ${acl(wineId === key, 'selected')}`}
            onClick={() => handleClick(key as keyof typeof wines)}
          >
            <Image src={wine.sampleImage} alt={key} layout='fullWidth' className='listOfWines-image' />
            <h2 className='listOfWines-title'>{key}</h2>
            <p className='listOfWines-price'>{wine.price}</p>
          </motion.button>
        )
      })}
    </section>
  )
}

export default ListOfWines
