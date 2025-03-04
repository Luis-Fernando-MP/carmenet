import Nav from '@/shared/ui/Nav'
import type { JSX } from 'react'

import './style.scss'
import AboutUs from './ui/AboutUs'
import Header from './ui/Header'
import Mission from './ui/Mission'
import Poetry from './ui/Poetry'
import Winemaker from './ui/Winemaker'

const Home = (): JSX.Element => {
  return (
    <main className='home'>
      <div className='blackGradient' />
      <div className='mainGradient home-gradient' />
      <Nav />
      <Header />
      <Mission />
      <Poetry />
      <AboutUs />
      <Winemaker />
    </main>
  )
}

export default Home
