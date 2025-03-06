'use client'

import UseThemeStoreStore from '@/shared/store/theme/useThemeStore'
import { Image } from '@unpic/react'
import type { JSX } from 'react'

type TLoadLogo = {
  src: string
}
const LoadLogo = ({ src }: TLoadLogo): JSX.Element => {
  const { theme } = UseThemeStoreStore()
  const logo = theme === 'dark' ? `${src}.webp` : `${src}-dark.webp`
  return <Image src={logo} layout='fullWidth' alt='carmenet logo' />
}

export default LoadLogo
