import { newKey } from '@/shared/key'
import FontTitle from '@/shared/ui/FontTitle'
import { Image } from '@unpic/react'
import type { JSX } from 'react'

import './style.scss'

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
      <FontTitle principal='Lo que' secondary='Dicen de nosotros' />
      <article className='testimonies-bento'>
        <div className='mainGradient testimonies-gradient' />
        {testimonies.map(testimony => {
          const { phrase, author, rol, photo } = testimony
          return (
            <div className='testimonies-item border' key={newKey()}>
              <p className='testimonies-phrase'>{phrase}</p>
              <div className='testimonies-author'>
                <Image src={photo} alt={author} layout='fullWidth' />
                <div className='testimonies-info'>
                  <h4>{author}</h4>
                  <p>{rol}</p>
                </div>
              </div>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Testimonies
