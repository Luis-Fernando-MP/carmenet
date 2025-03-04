import Nav from '@/shared/ui/Nav'
import type { JSX } from 'react'

import './style.scss'
import Header from './ui/Header'
import Mission from './ui/Mission'
import Poetry from './ui/Poetry'

const Home = (): JSX.Element => {
  return (
    <main className='home'>
      <div className='blackGradient' />
      <div className='mainGradient home-gradient' />
      <Nav />
      <Header />
      <Mission />
      <Poetry />
    </main>
  )
}

export default Home
