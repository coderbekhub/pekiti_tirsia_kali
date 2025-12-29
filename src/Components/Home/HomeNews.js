import React from 'react'
import { getLanguage, getText } from '../../locale'
import { ARCHERY } from '../../tools/constants'
import { Link } from 'react-router-dom'
import NewsImg from '../../img/newsImg.png'
import AboutUsImg from '../../img/aboutUsImg.png'

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
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
          <div className='HomeNewsAnimated col-12 col-md-6 col-xl-4'>
            <img src={NewsImg} alt="..." />
            <h2>Интересный конкурс, в котором отобрали юных снайперов</h2>
            <div className='moreNewsContent'>
              <Link className='moreNews' to='/'>{getText('newsMore')}</Link>
              <span>{getText('newsDate')}</span>
            </div>
          </div>
        </div>

        {/* ABOUT US */}

        <div className='aboutUsContent row '>
          <div className='aboutUsInfo col-12 col-md-6'>
            <img src={NewsImg3} alt="..." />
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
