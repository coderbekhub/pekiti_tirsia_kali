import React from 'react'
import { getLanguage, getText } from '../../locale'
import { PEKITI } from '../../tools/constants'
import RahbariyatImg from '../../img/rahbar.png'
// import RahbariyatImg2 from '../../img/rahbariyat2.jpg'

export default function Rahbariyat() {
  return (
    <section className='rahbariyatSection'>
      <div className="container">
        <div className='rahbariyatContent'>
          <h2 className='rahbariyatTitle'>Federatsiya rahbari</h2>
          <div className="rahbariyatCard">
            <img src={RahbariyatImg} alt="RahbariyatImg" />
            <div className='rahbariyatInfo'>
              <h2>Ravshan Xatamov Alimarovich</h2>
              <p>Pekiti-Tirsia Kali federatsiya raisi </p>
            </div>
          </div>

          {/* <div className="rahbariyatCard">
            <img src={RahbariyatImg2} alt="RahbariyatImg" />
            <div className='rahbariyatInfo'>
              <h2>Leopoldo Tortal Gaje</h2>
              <p>Pekiti-Tirsia Kali jaxon federatsiyasi raisi</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
