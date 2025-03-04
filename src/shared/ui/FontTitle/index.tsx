import { JSX } from 'react'

import './style.scss'

interface IFontTitle {
  principal: string
  secondary?: string
}
const FontTitle = ({ principal, secondary }: IFontTitle): JSX.Element => {
  return (
    <section className='fontTitle'>
      <div className='fontTitle-text'>
        <h3>{principal}</h3>
        <h3 className='font3'>{secondary}</h3>
      </div>
      <div className='fontTitle-line' />
    </section>
  )
}

export default FontTitle
