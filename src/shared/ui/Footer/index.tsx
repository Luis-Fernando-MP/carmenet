import { CARMENET_WEBSITE, SHUN_DEV } from '@/shared/constants'
import { BaggageClaimIcon, FacebookIcon, FigmaIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import type { JSX } from 'react'

import LoadLogo from '../LoadLogo'
import './style.scss'
import './userMobile.scss'

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
          <Link href={`${CARMENET_WEBSITE}/contact`} className='footer-link' target='_blank' rel='noopener noreferrer'>
            Hablemos
          </Link>
          <Link href={`${CARMENET_WEBSITE}/privacy-policy`} className='footer-link' target='_blank' rel='noopener noreferrer'>
            Política de privacidad
          </Link>
          <Link href={`${CARMENET_WEBSITE}/terms-of-use`} className='footer-link' target='_blank' rel='noopener noreferrer'>
            Términos de uso
          </Link>
          <Link href={CARMENET_WEBSITE} className='footer-link footer-fn' target='_blank' rel='noopener noreferrer'>
            Sitio web oficial
          </Link>
        </section>

        <section className='footer-follow'>
          <h3>Síguenos</h3>
          <aside className='footer-follow__social'>
            <Link
              href='https://www.figma.com/proto/9yePlhkQT3IWQo3c4aTeDP/Carmenet?node-id=4-2&t=2lhWHyGvQ78FdMRA-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&device-frame=0&hide-ui=1'
              className='active'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FigmaIcon />
            </Link>
            <Link href='https://www.facebook.com/CarmenetReserve' target='_blank' rel='noopener noreferrer'>
              <FacebookIcon />
            </Link>
            <Link href='https://www.instagram.com/carmenetreserve' target='_blank' rel='noopener noreferrer'>
              <InstagramIcon />
            </Link>
            <Link href='https://twitter.com/CarmenetReserve' target='_blank' rel='noopener noreferrer'>
              <TwitterIcon />
            </Link>
          </aside>
          <Link
            href='https://www.broncowine-trade.com/brands/carmenet'
            className='footer-follow__trade active'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BaggageClaimIcon />
            Trade
          </Link>
        </section>
      </article>
      <section className='footer-copyright'>
        <p>© 2025 Carmenet Winery. Todos los derechos reservados para la empresa.</p>
        <h4>
          Diseñado y desarrollado con dedicación por&nbsp;
          <Link href={SHUN_DEV} className='footer-shun' target='_blank' rel='noopener noreferrer'>
            SHUN DEV
          </Link>
          &nbsp;como proyecto de aprendizaje y crecimiento profesional.
        </h4>
      </section>
    </footer>
  )
}

export default Footer
