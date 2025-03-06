import { CARMENET_WEBSITE } from '@/shared/constants'
import { BaggageClaimIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import type { JSX } from 'react'

import LoadLogo from '../LoadLogo'
import './style.scss'

const Footer = (): JSX.Element => {
  return (
    <footer className='footer'>
      <article className='footer-carmenet'>
        <section className='footer-info'>
          <Link href={CARMENET_WEBSITE} target='_blank' rel='noopener noreferrer' className='footer-logo'>
            <LoadLogo src='/logoV2' />
          </Link>

          <p>
            123 viñedo lane, sonoma county <br />
            ca 95476
          </p>
          <p>info@carmenet.com</p>
          <h4 className='footer-phone footer-fn'>+1 (555) 123-4567</h4>
        </section>

        <section className='footer-legal'>
          <h3>Legal</h3>
          <Link href={`${CARMENET_WEBSITE}/contact`} className='footer-link'>
            Hablemos
          </Link>
          <Link href={`${CARMENET_WEBSITE}/privacy-policy`} className='footer-link'>
            Política de privacidad
          </Link>
          <Link href={`${CARMENET_WEBSITE}/terms-of-use`} className='footer-link'>
            Términos de uso
          </Link>
          <Link href={CARMENET_WEBSITE} className='footer-link footer-fn'>
            Sitio web oficial
          </Link>
        </section>

        <section className='footer-follow'>
          <h3>Síguenos</h3>
          <aside className='footer-follow__social'>
            <Link href='https://www.instagram.com/carmenetreserve'>
              <FacebookIcon />
            </Link>
            <Link href='https://www.facebook.com/CarmenetReserve'>
              <InstagramIcon />
            </Link>
            <Link href='https://twitter.com/CarmenetReserve'>
              <TwitterIcon />
            </Link>
          </aside>
          <Link href='https://www.broncowine-trade.com/brands/carmenet' className='footer-follow__trade active'>
            <BaggageClaimIcon />
            Trade
          </Link>
        </section>
      </article>
      <section className='footer-copyright'>
        <p>© 2025 Carmenet Winery. Todos los derechos reservados para la empresa.</p>
        <h4>
          Un hobby tangible en el ámbito virtual. Desarrollado por <span className='footer-fn'>SHUN DEV</span>
        </h4>
      </section>
    </footer>
  )
}

export default Footer
