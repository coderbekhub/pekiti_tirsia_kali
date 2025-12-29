import React from 'react'
import { getLanguage, getText } from '../../locale'
import { ARCHERY } from '../../tools/constants'
import { Link } from 'react-router-dom'
import FooterBrand from '../../img/brand.png'

export default function FooterNav() {
  return (
    <section className='footerNavSection'>
      <div className="container">
      <nav className='footerNav'>
        <div>
          <img src={FooterBrand} alt="..." />
          <h2>{getText('siteTitle')}</h2>
        </div>
          <ul className='footerList'>
            <li><Link className='FooterLink' to='/'> {getText('home')} </Link></li>
            <li><Link className='FooterLink' to='/federation'>{getText('federation')}</Link></li>
            <li><Link className='FooterLink' to='/gallary'>{getText('gallery')}</Link></li>
            <li><Link className='FooterLink' to='/musobaqa'>{getText('competition')}</Link></li>
            <li><Link className='FooterLink' to='/news'>{getText('news')}</Link></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
