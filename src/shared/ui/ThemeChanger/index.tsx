'use client'

import UseThemeStoreStore from '@/shared/store/theme/useThemeStore'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useEffect } from 'react'
import type { JSX } from 'react'

import './style.scss'

const ThemeChanger = (): JSX.Element => {
  const { theme, setTheme } = UseThemeStoreStore()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme as 'light' | 'dark')
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [setTheme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <motion.button
      className='themeChanger'
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {theme === 'light' ? <Moon className='themeChanger-icon' /> : <Sun className='themeChanger-icon' />}
    </motion.button>
  )
}

export default ThemeChanger
