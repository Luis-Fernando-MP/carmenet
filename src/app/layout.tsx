import Offline from '@/shared/components/Offline'
import { bodyFonts } from '@/shared/fonts'
import '@sass/config/global.scss'
import { ViewTransitions } from 'next-view-transitions'
import NextTopLoader from 'nextjs-toploader'
import type { JSX, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import './globals.css'
import { metadata, viewport } from './metadata'
import './style.scss'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <html lang='es'>
      <body className={`${bodyFonts} antialiased`}>
        <NextTopLoader color='rgb(var(--tn-primary))' showSpinner={false} />
        <div className='mainBackground' />
        <ViewTransitions>{children}</ViewTransitions>
        <Offline />
        <Toaster
          position='top-center'
          toastOptions={{
            className: 'toast',
            position: 'top-right',
            style: {
              background: 'rgb(var(--bg-primary))',
              color: 'rgb(var(--fnt-primary))'
            }
          }}
        />
      </body>
    </html>
  )
}

export default RootLayout
export { metadata, viewport }
