import React from 'react'
import { getLanguage, getText } from '../../locale'
import { ARCHERY } from '../../tools/constants'
import CountUp from 'react-countup';
import Partner from './Partner';

export default function Indicator() {
  return (
    <section className='indicatorSection'>
      <div className='blur'></div>
      <div className="container">
        <div className='pTop'>
          <div className='indicatorText'>
            <h2 className='indicatorHeaderTitle'>Pekiti-Tirsia Kali <br /> jang san'ati federatsiyasi</h2>
            <p>{getText('indicatorHeaderText')}</p>
          </div>

          <div className='indicatorContent text-center row'>
            <h2>{getText('indicatorHeaderTitle')}</h2>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={22} duration={2} delay={0} />+</h1>
              <h2>{getText('indicatorHeaderTitle')}</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={278} duration={2} delay={0} />+</h1>
              <h2>{getText('indicatorHeaderTitle')}</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={800} duration={2} delay={0} />+</h1>
              <h2>{getText('indicatorHeaderTitle')}</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={32} duration={2} delay={0} />+</h1>
              <h2>{getText('indicatorHeaderTitle')}</h2>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}
