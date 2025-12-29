import React from 'react'
import { getLanguage, getText } from '../../locale'
import { PEKITI } from '../../tools/constants'
import { Link } from 'react-router-dom'
import NewsImg from '../../img/newsImg.png'
import NewsImg1 from '../../img/news7.jpg'
import AboutUsImg from '../../img/aboutUsImg.png'
import News1 from '../../img/news1.jpg'
import News2 from '../../img/news2.jpg'
import News3 from '../../img/news3.jpg'
import News4 from '../../img/news4.jpg'
import News5 from '../../img/news5.jpg'
import News6 from '../../img/news6.jpg'


export default function HomeNews() {
  return (
    <section className='HomeNewsSection'>
      <div className="container">
        <div className='HomeNewsText'>
          <h2>{getText('newsTitle')}</h2>
          <Link className='allNews' to='/allnews'>{getText('allNews')}
            <svg width="8" height="auto" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L4 4L1 1" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </Link>
        </div>
        <div className='row HomeNewsContent'>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={News1} alt="..." />
            <h2>{getText('newsText')}</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={News2} alt="..." />
            <h2>{getText('newsText')}</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={News3} alt="..." />
            <h2>{getText('newsText')}</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={News4} alt="..." />
            <h2>{getText('newsText')}</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={News5} alt="..." />
            <h2>{getText('newsText')}</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={News6} alt="..." />
            <h2>{getText('newsText')}</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
        </div>

        {/* ABOUT US */}

        <div className='aboutUsContent row '>
          <div className='aboutUsInfo col-12 col-md-6'>
            <img src={NewsImg1} alt="..." />
          </div>
          <div className='aboutUsInfo col-12 col-md-6'>
            <h2>{getText('aboutTitle')}</h2>
            <p className='test'>{getText('aboutText1')}</p>
            <p>{getText('aboutText2')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
