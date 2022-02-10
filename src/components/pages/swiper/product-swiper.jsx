/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css/bundle';

import thumb01 from '../product-page/assets/product01-max.jpg';

import styles from './product-swiper.scss';

const images = [
  {
    src: thumb01,
  },
  {
    src: thumb01,
  },
  {
    src: thumb01,
  },
  {
    src: thumb01,
  },
];

export const ProductSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const setNext = () => controlledSwiper.slideNext();
  const setPrev = () => controlledSwiper.slidePrev();
  return (
    <>
      <div className='thumbs'>
        <div className='slider-buttons'>
          <div aria-hidden type='button' className='slider-button up-button' onClick={setPrev} />
          <div aria-hidden type='button' className='slider-button down-button' onClick={setNext} />
        </div>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          modules={[Navigation, Thumbs, Controller]}
          className='product-thumb-swiper'
        >
          {images.map((image) => (
            <SwiperSlide>
              <img src={image.src} alt='img' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setControlledSwiper}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className='product-image-swiper'
      >
        {images.map((image) => (
          <SwiperSlide className={styles.big}>
            <img src={image.src} alt='img' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
