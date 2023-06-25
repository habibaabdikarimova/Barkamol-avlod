// import React from 'react';
import malumotlarbazasi from "../../assets/image/malumotlarbazasi.png";
import adliya from "../../assets/image/adliya.png";
import ochiqbaza from "../../assets/image/ochiqbaza.png";
import rasmiysayt from "../../assets/image/rasmiysayt.png";
import yagonadarcha from "../../assets/image/yagonadaarcha.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "./style.scss";
// import required modules
import { Autoplay, Pagination } from "swiper";

function Slider() {
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="img">

          <img src={adliya} alt="" />
            </div>
          <p>O’zbekiston Respublikasi milliy huquqiy internet portali</p>
        </SwiperSlide>
        <SwiperSlide>
            <div className="img">

          <img src={malumotlarbazasi} alt="" />
            </div>
          <p>
            O’zbekiston Respublikasining qonun hujjatlari ma’lumotlar milliy
            bazasi
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={yagonadarcha} alt="" />
          </div>
          <p>Yagona interaktiv davlat xizmatlari portali</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={ochiqbaza} alt="" />
          </div>
          <p>O’zbekiston Respublikasining ochiq ma’lumotlar bazasi</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={rasmiysayt} alt="" />
          </div>
          <p>O’zbekiston Respublikasi Prezidenti rasmiy veb sayti</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={adliya} alt="" />
          </div>
          <p>O’zbekiston Respublikasi milliy huquqiy internet portali</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={malumotlarbazasi} alt="" />
          </div>
          <p>
            O’zbekiston Respublikasining qonun hujjatlari ma’lumotlar milliy
            bazasi
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={yagonadarcha} alt="" />
          </div>
          <p>Yagona interaktiv davlat xizmatlari portali</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={ochiqbaza} alt="" />
          </div>
          <p>O’zbekiston Respublikasining ochiq ma’lumotlar bazasi</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img">
            <img src={rasmiysayt} alt="" />
          </div>
          <p>O’zbekiston Respublikasi Prezidenti rasmiy veb sayti</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
