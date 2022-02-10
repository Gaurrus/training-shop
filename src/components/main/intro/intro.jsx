/* eslint-disable import/no-unresolved */
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

import { sliderStore } from '../../constants/slider';

import styles from './intro.module.scss';
import './slider.scss';

import 'swiper/css/bundle';

export const Intro = () => (
  <div className={styles.wrapper}>
    <div className={styles.intro}>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination
          effect='fade'
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {sliderStore.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.sliderWrapper}>
                <img className={styles.sliderBackground} src={item.img} alt='slider-pic' />
                <NavLink to='/training-shop'>
                  <div className={styles.title}>
                    <p className={styles.banner}>{item.banner}</p>
                    <h1 className={styles.titleText}>{item.title}</h1>
                  </div>
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.topRightBlock}>
          <div className={styles.smallLeft}>
            <NavLink to='/women'>
              <div className={styles.microTitle}>
                <h2 className={styles.microTitleText}>Women</h2>
              </div>
            </NavLink>
          </div>
          <div className={styles.smallRight}>
            <NavLink to='/men'>
              <div className={styles.microTitle}>
                <h2 className={styles.microTitleText}>men</h2>
              </div>
            </NavLink>
          </div>
        </div>
        <div className={styles.middle}>
          <NavLink to='/accessories'>
            <div className={styles.microTitle}>
              <h2 className={styles.microTitleText}>Accessories</h2>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);
