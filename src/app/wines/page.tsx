import FontTitle from '@/shared/ui/FontTitle'
import Footer from '@/shared/ui/Footer'
import Nav from '@/shared/ui/Nav'
import type { JSX } from 'react'

import './style.scss'
import SelectedWine from './ui/SelectedWine'

const Wines = (): JSX.Element => {
  return (
    <main className='wines'>
      <div className='blackGradient' />
      <div className='mainGradient wines-gradient' />
      <Nav />
      <div className='wines-wrapper'>
        <FontTitle principal='La excelencia de' secondary='Sonoma' hideLine className='wines-headTitle' />
        <SelectedWine />
        <Footer />
      </div>
    </main>
  )
}

export default Wines
