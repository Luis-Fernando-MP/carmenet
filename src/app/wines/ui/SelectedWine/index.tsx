'use client'

import { newKey } from '@/shared/key'
import { Image } from '@unpic/react'
import UseWineStoreStore from '@wines/store/useWineStore'
import type { JSX } from 'react'

import { wines } from '../../store/wines'
import './style.scss'

const SelectedWine = (): JSX.Element | null => {
  const { wineId } = UseWineStoreStore()
  if (!(wineId in wines)) return null
  const { background, notes, pairing, mix, moreInfo } = wines[wineId]

  return (
    <article className='selectedWine'>
      <section className='selectedWine-image'>
        <Image src={background} alt={`${wineId} background`} layout='fullWidth' />
      </section>

      <section className='selectedWine-details'>
        <div className='selectedWine-notes'>
          <h3>Notas de cata</h3>
          <p>{notes}</p>
        </div>

        <div className='selectedWine-pairing'>
          <h3>Maridaje perfecto</h3>
          <ul className='selectedWine-list'>
            {pairing.map(item => {
              return (
                <li className='selectedWine-listItem' key={newKey()}>
                  <p>{item}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='selectedWine-pairing'>
          <h3>Mezcla</h3>
          <ul className='selectedWine-list'>
            {mix.map(item => {
              return (
                <li className='selectedWine-listItem' key={newKey()}>
                  <p dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              )
            })}
          </ul>
        </div>

        <div className='selectedWine-pairing'>
          <h3>Información técnica</h3>
          <ul className='selectedWine-list'>
            {moreInfo.map(info => {
              return (
                <li className='selectedWine-listItem' key={newKey()}>
                  <p>{info}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </article>
  )
}

export default SelectedWine
