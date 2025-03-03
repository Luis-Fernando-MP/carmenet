import { Dancing_Script, Playfair_Display_SC, Roboto_Slab } from 'next/font/google'

export const font1 = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--family1'
})

export const font2 = Roboto_Slab({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--family2'
})

export const font3 = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--familyEspecial'
})

export const bodyFonts = `${font1.variable} ${font2.variable} ${font3.variable}`
