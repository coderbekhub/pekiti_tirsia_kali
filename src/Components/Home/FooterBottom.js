import React from 'react'

export default function FooterBottom() {
  return (
    <section className='footerBottom'>
      <div className="container">
        <div className='footerBottomContent row'>
          <div className='bottom30 col-12 col-md-6 col-xl-3'>
            <h2>Контакты</h2>
            <a className='footerBottomInfo' href="tel:+998977770777">
              <i class='bx bx-phone-call' ></i>
              +998 97 777 07 77
            </a>
            <a className='footerBottomInfo' href="uaf.cfflce@gmail.com">
              <i class='bx bx-envelope'></i>
              uaf.cfflce@gmail.com
            </a>
          </div>
          <div className='bottom30 col-12 col-md-6 col-xl-3'>
            <h2>Адрес</h2>
            <p>Узбекистан г.Ташкент</p>
            <p>Юнусабадский  р-н , 18</p>
          </div>
          <div className='bottom20 col-12 col-md-6 col-xl-3'>
            <h2>Рабочее вреья</h2>
            <p>09:00 - 20:00 без выходных</p>
          </div>
          <div className='col-12 col-md-6 col-xl-3'>
            <div className='footerSocialLink'>
              <a href="https://t.me/Pekiti_Tirsia_Kali_uz" target='_blank'>
                <i class='bx bxl-telegram'></i>
              </a>
              <a href="https://www.instagram.com/pekiti_tirsia_kali_uz/" target='_blank'>
                <i class='bx bxl-instagram-alt' ></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585636679622" target='_blank'>
                <i class='bx bxl-facebook-circle'></i>
              </a>
              <a href="https://www.youtube.com/channel/UCO4w4u1akgNOhzbLC3sALzg" target='_blank'>
                <i class='bx bxl-youtube'></i>
              </a>
            </div>
            <p>При обнаруже ошибки на сайте. и нажмите Ctr + Enter для уведомления адинстрации</p>
          </div>
        </div>
      </div>
    </section>
  )
}
