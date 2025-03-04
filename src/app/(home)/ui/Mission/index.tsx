'use client'

import FontTitle from '@/shared/ui/FontTitle'
import { Image } from '@unpic/react'
import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css'
import type { JSX } from 'react'

import './style.scss'

const Mission = (): JSX.Element => {
  return (
    <section className='mission home-section' id='mission'>
      <h4 className='mission-slug'>CARMENET</h4>
      <FontTitle principal='Nuestra' secondary='Misión' />
      <p className='mission-paragraph'>
        En Carmenet Reserve nos enorgullecemos de elaborar vinos consistentes y tradicionales de carácter distintivo. Nuestros
        vinos están impulsados por la calidad para consumidores inteligentes que desean disfrutar de elegantes vinos de California
        a la mitad de precio, lo que los convierte en un lujo asequible en botella.
      </p>
      <section className='mission-video border'>
        <div className='mission-company border'>
          <div className='mission-company__bronco'>
            <Image src='/images/bronco-wine.png' alt='bronco wine logo' layout='fullWidth' />
          </div>
          <div className='mission-company__info'>
            <h3>Carmenet Vintners Reserve</h3>
            <p>Bronco Wine Company</p>
          </div>
        </div>

        <CldVideoPlayer
          className='mission-videoPlayer'
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
      </section>
    </section>
  )
}

export default Mission
