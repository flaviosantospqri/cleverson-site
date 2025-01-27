// ReactCarrossel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core';
import { Pagination } from 'swiper/modules';
import CardService from './CardService.astro';

SwiperCore.use([Pagination]);

const ReactCarrossel = ({ items }) => (
  <div className="carousel-container-wrapper">
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="carousel-slide">
          <CardService title={item.title} properties={item.properties} pathSvg={item.pathSvg} />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="carousel-bullets swiper-pagination"></div>
  </div>
);

export default ReactCarrossel;
