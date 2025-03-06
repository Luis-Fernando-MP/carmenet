import Footer from '@/shared/ui/Footer'
import Nav from '@/shared/ui/Nav'
import type { JSX } from 'react'

import './style.scss'
import ListOfWines from './ui/ListOfWines'
import SelectedWine from './ui/SelectedWine'
import './userMobile.scss'

const Wines = (): JSX.Element => {
  return (
    <main className='wines'>
      <div className='blackGradient' />
      <div className='mainGradient wines-gradient' />
      <Nav />
      <div className='wines-wrapper'>
        <h3 className='wines-headTitle'>
          La excelencia de <span className='font3'>Sonoma</span>
        </h3>
        <SelectedWine />
        <ListOfWines />
        <Footer />
      </div>
    </main>
  )
}

export default Wines
