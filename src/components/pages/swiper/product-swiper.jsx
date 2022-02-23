/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css/bundle';

import styles from './product-swiper.scss';

export const ProductSwiper = ({ images }) => {
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
          breakpoints={{
            1135: {
              direction: 'vertical',
            },
          }}
        >
          {images?.map((image) => (
            <SwiperSlide>
              <img src={`https://training.cleverland.by/shop${image.url}`} alt='img' />
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
        {images?.map((image) => (
          <SwiperSlide className={styles.big}>
            <img src={`https://training.cleverland.by/shop${image.url}`} alt='img' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
