import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../HeroSlider.css'
import { Parallax, Pagination, Navigation } from "swiper";

export default function Hero() {
  return (
    <section className='heroSection'>
      <div className="container">
        <h2 className="heroTitle" data-swiper-parallax="-300">
          Yurakdan, aql bilan bajaramiz!
        </h2>
        {/* <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide className="sliderTitle">
            <h2 className="title" data-swiper-parallax="-300">
              противник — не моя проблема. <br /> Я — его проблема.
            </h2>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              </p>
              <a className="heroBtn" href="#">Подробнее</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="title" data-swiper-parallax="-300">
              Slide 2
            </h2>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              </p>
            </div>
              <a className="heroBtn" href="#">Подробнее</a>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="title" data-swiper-parallax="-300">
              Slide 3
            </h2>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              </p>
            </div>
              <a className="heroBtn" href="#">Подробнее</a>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  )
}
