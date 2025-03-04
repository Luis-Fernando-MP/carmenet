import FontTitle from '@/shared/ui/FontTitle'
import { Image } from '@unpic/react'
import type { JSX } from 'react'

import './style.scss'

const Winemaker = (): JSX.Element => {
  return (
    <section className='winemaker home-section' id='winemaker'>
      <h4>JOHN ALLBAUGH</h4>
      <FontTitle principal='Nuestro' secondary='Enólogo' />
      <div className='winemaker-author'>
        <Image src='/images/winemaker.png' alt='winemaker John Allbaugh' layout='fullWidth' />
      </div>
      <h2 className='winemaker-phrase'>
        "<span className='font3'>Quiero hacer vinos que todos puedan disfrutar </span>y compartir con familiares y amigos
        alrededor de la mesa"
      </h2>
      <p className='winemaker-paragraph'>
        <span>John Allbaugh</span>, nacido en California, se graduó en Química en la Universidad Estatal de California,
        Stanislaus. Tras completar sus estudios, profundizó en viticultura y enología en la Universidad de California, Davis, y
        comenzó su trayectoria en la elaboración de vinos en 2005. Su pasión por la enología surge de los inolvidables momentos
        que ha compartido con amigos y familiares alrededor de una copa de vino.
      </p>
    </section>
  )
}

export default Winemaker
