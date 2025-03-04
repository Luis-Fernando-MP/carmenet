import FontTitle from '@/shared/ui/FontTitle'
import type { JSX } from 'react'

import './style.scss'

const AboutUs = (): JSX.Element => {
  return (
    <section className='aboutUs home-section' id='aboutUs'>
      <FontTitle principal='Sobre' secondary='Nosotros' />

      <article className='aboutUs-bento'>
        <div className='aboutUs-item border'>
          <div className='aboutUs-item__tile'>
            <h4>Nuestra</h4>
            <h2>Historia</h2>
          </div>
          <p className='aboutUs-item__paragraph'>
            Vinos de Carácter Distintivo. CARMENET (pronunciado “Car‑men‑ay”) es una colección de vinos de California, fundada en
            1983, que encarna el arte de mezclar y su capacidad para lograr resultados de máxima calidad.
          </p>
        </div>
        <div className='aboutUs-item border'>
          <div className='aboutUs-item__tile'>
            <h4>Nuestros</h4>
            <h2>Vinos</h2>
          </div>
          <p className='aboutUs-item__paragraph'>
            Carmenet Reserve produce vinos que todos pueden disfrutar y compartir con familiares y amigos alrededor de la mesa.
            Procedentes directamente de viñedos familiares en Lodi, California, nuestros vinos son elegantes, consistentes y
            accesibles.
          </p>
        </div>
        <div className='aboutUs-item col-span-2 border'>
          <h2>Reconocimientos</h2>
          <p className='aboutUs-item__paragraph'>
            CARMENET ha sido reconocida como una Rising Star por Beverage Dynamics desde 2015 y destacada como Hot Prospect en el
            boletín Shanken Impact durante cuatro años consecutivos (2015-2018) en la categoría de vinos nacionales.
          </p>
        </div>
      </article>
    </section>
  )
}

export default AboutUs
