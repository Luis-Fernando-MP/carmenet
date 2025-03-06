import { JSX } from 'react'

import './style.scss'
import './userMobile.scss'

interface IFontTitle {
  principal: string
  secondary?: string
  hideLine?: boolean
  className?: string
}
const FontTitle = ({ principal, secondary, hideLine = false, className }: IFontTitle): JSX.Element => {
  return (
    <section className='fontTitle'>
      <div className={`fontTitle-text ${className ?? ''}`}>
        <h3>{principal}</h3>
        <h3 className='font3'>{secondary}</h3>
      </div>
      {!hideLine && <div className='fontTitle-line' />}
    </section>
  )
}

export default FontTitle
