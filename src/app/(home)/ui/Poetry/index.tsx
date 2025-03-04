import type { JSX } from 'react'

import './style.scss'

const Poetry = (): JSX.Element => {
  return (
    <div className='poetry'>
      <div className='mainGradient poetry-gradient' />
      <section className='poetry-wrapper home-section'>
        <h1 className='poetry-title'>
          El vino es <span className='font3'>poesía</span> embotellada
        </h1>
        <p className='poetry-paragraph'>
          En CARMENET, cada cosecha es un nuevo verso en nuestra historia. Un legado de cinco generaciones que han dedicado su
          vida a la búsqueda de la excelencia vinícola.
        </p>
        <ul className='poetry-stats'>
          <li className='poetry-stat'>
            <h2>138</h2>
            <p>Años de historia</p>
          </li>
          <li className='poetry-stat'>
            <h2>15,000</h2>
            <p>Barricas de roble francés</p>
          </li>
          <li className='poetry-stat'>
            <h2>X5</h2>
            <p>Generaciones de vinicultores</p>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Poetry
