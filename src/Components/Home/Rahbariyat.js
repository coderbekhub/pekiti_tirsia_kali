import React from 'react'
import { getLanguage, getText } from '../../locale'
import { PEKITI } from '../../tools/constants'
import { Link } from 'react-router-dom'
import Rovshan from '../../img/rahbar.png'
import Kotib from '../../img/kotib.png'
import Sormonkulov from '../../img/Sormonkulov.jpg'

export default function Rahbariyat() {
  return (
    <section className='rahbariyatSection'>
      <div className="container">
        <div className='rahbariyatContent'>
          <h2 className='rahbariyatTitle'>RAHBARIYAT</h2>
          <div className='d-flex'>
            <div>
              <div className="rahbariyatCard">
                <img src={Sormonkulov} alt="Sormonkulov" />
                <div className='rahbariyatInfo'>
                  <h2>Sormonkulov Adxamjon Rayimovich</h2>
                  <p>Pekiti-Tirsia Kali federatsiya raisi</p>
                </div>
              </div>
              <div className="rahbariyatCard">
                <img src={Rovshan} alt="RahbariyatImg" />
                <div className='rahbariyatInfo'>
                  <h2>Ravshan Xatamov Alimarovich</h2>
                  <p>Pekiti-Tirsia Kali federatsiya raisi 1-o'rinbosari</p>
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
            <div className='rahbariyatCard rahbariyatCardSec'>
              <Link to="/federation">
                <h2 className='federatsiyaH1'>Federatsiya haqida</h2>
              </Link>
              <Link to="/news">
                <h2>Yangiliklar</h2>
              </Link>
              <Link to="/contact">
                <h2>Aloqa</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
