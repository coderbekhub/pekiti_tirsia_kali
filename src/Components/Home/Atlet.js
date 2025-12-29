import React from 'react'
import { getLanguage, getText } from '../../locale'
import { PEKITI } from '../../tools/constants'
import atletsImg from '../../img/atletsImg.svg'
import AtletsAva from '../../img/archeryAva/ava1.png'
import AtletsAva2 from '../../img/archeryAva/ava2.png'
import AtletsAva3 from '../../img/archeryAva/ava3.png'
import AtletsAva4 from '../../img/archeryAva/ava4.png'
import Yoriqchi1 from '../../img/archeryAva/Yoriqchi1.png'
import Yoriqchi2 from '../../img/archeryAva/Yoriqchi2.png'
import Yoriqchi3 from '../../img/archeryAva/Yoriqchi3.png'
import Yoriqchi4 from '../../img/archeryAva/Yoriqchi4.png'
import Yoriqchi5 from '../../img/archeryAva/Yoriqchi5.png'

export default function Atlet() {
  return (
    <section className='atletsSection'>
      <div className="container">
        <h2>{getText('yoriqchilar')}</h2>
        <div className='row text-center atletsContent'>
          <div className='col-12 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={Yoriqchi1} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Abdusattorov Abduxalil</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={Yoriqchi2} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Musayev Zafarxo'ja</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={Yoriqchi3} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Jangirov Mansur</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={Yoriqchi4} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Ibragimov Oybek</p>
          </div>
          <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={Yoriqchi5} with='90' height='90' alt="atlets ava" />
            </div>
            <p>O'ktamov Og'abek</p>
          </div>
          {/* <div className='col-6 col-md-6 col-xl-2'>
            <div className='atletsAva'>
              <img src={AtletsAva2} with='90' height='90' alt="atlets ava" />
            </div>
            <p>Name Sname</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}
