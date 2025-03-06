import Footer from '@/shared/ui/Footer'
import Nav from '@/shared/ui/Nav'
import type { JSX } from 'react'

import './style.scss'
import AboutUs from './ui/AboutUs'
import Header from './ui/Header'
import Mission from './ui/Mission'
import Poetry from './ui/Poetry'
import Testimonies from './ui/Testimonies'
import Winemaker from './ui/Winemaker'
import './userMobile.scss'

const Home = (): JSX.Element => {
  return (
    <main className='home'>
      <div className='blackGradient' />
      <div className='mainGradient home-gradient' />
      <Nav />
      <div className='home-wrapper'>
        <Header />
        <Mission />
        <Poetry />
        <AboutUs />
        <Winemaker />
        <Testimonies />
        <Footer />
      </div>
    </main>
  )
}

export default Home
