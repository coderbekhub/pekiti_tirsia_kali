import React from 'react'
import { getLanguage, getText } from '../../locale'
import { PEKITI } from '../../tools/constants'

export default function Partner() {
  return (
    <section className='partnerSection'>
      <div className="container">
        <h2>{getText('partners')}</h2>

        <div className='row'>
          <div className=''>
            <img src="" alt="" />
          </div>
          <div className=''>
            <img src="" alt="" />
          </div>
          <div className=''>
            <img src="" alt="" />
          </div>
          <div className=''>
            <img src="" alt="" />
          </div>
          <div className=''>
            <img src="" alt="" />
          </div>
          <div className=''>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
