import Nav from '@/shared/ui/Nav'
import type { JSX } from 'react'

import './style.scss'
import Header from './ui/Header'
import Mission from './ui/Mission'

const Home = (): JSX.Element => {
  return (
    <main className='home'>
      <div className='blackGradient' />
      <div className='mainGradient' />
      <Nav />
      <Header />
      <Mission />
    </main>
  )
}

export default Home
