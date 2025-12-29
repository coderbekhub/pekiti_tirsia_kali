import React from 'react'
import { getLanguage, getText } from '../../locale'
import { PEKITI } from '../../tools/constants'
import RahbariyatImg from '../../img/rahbar.png'
import Kotib from '../../img/kotib.png'

export default function Rahbariyat() {
  return (
    <section className='rahbariyatSection'>
      <div className="container">
        <div className='rahbariyatContent'>
          <h2 className='rahbariyatTitle'>RAHBARIYAT</h2>
          <div className="rahbariyatCard">
            <img src={RahbariyatImg} alt="RahbariyatImg" />
            <div className='rahbariyatInfo'>
              <h2>Ravshan Xatamov Alimarovich</h2>
              <p>Pekiti-Tirsia Kali federatsiya raisi </p>
            </div>
          </div>

          <div className="rahbariyatCard">
            <img src={Kotib} alt="Kotib" />
            <div className='rahbariyatInfo'>
              <h2>Abdullayev Anvar</h2>
              <p>Pekiti-Tirsia Kali federatsiya kotibi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
