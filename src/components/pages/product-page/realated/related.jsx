/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Autoplay } from 'swiper';
import { GridItem } from '../../../main/grid-item/grid-item';

import 'swiper/css/bundle';

import styles from './related.module.scss';

export const Related = ({ dresses, productType, idName }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const setNext = () => controlledSwiper.slideNext();
  const setPrev = () => controlledSwiper.slidePrev();

  return (
    <div className={styles.wrapper}>
      <div className={styles.relatedWrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>RELATED PRODUCTS</h2>
          <div className={styles.arrows}>
            <div aria-hidden type='button' className={classNames(styles.arrow, styles.left)} onClick={setPrev} />
            <div aria-hidden type='button' className={classNames(styles.arrow, styles.right)} onClick={setNext} />
          </div>
        </div>
        <div className={styles.related}>
          <Swiper
            data-test-id='related-slider'
            className={styles.relatedSwiper}
            spaceBetween={10}
            breakpoints={{
              543: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              823: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1151: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            loop
            autoplay={{ delay: 3000 }}
            modules={[Controller, Autoplay]}
            onSwiper={setControlledSwiper}
          >
            {dresses
              ?.filter((item) => item.particulars.isMostViewed)
              ?.map((item) => (
                <SwiperSlide className={styles.slideItem}>
                  <NavLink key={item.id} to={`/${productType}/${item.id}`}>
                    <GridItem
                      key={item.id}
                      img={item.images[0].url}
                      title={item.name}
                      price={item.price}
                      sale={item.discount}
                      rating={item.rating}
                    />
                  </NavLink>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

Related.propTypes = {
  dresses: PropTypes.arrayOf({
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
    rating: PropTypes.string,
    sale: PropTypes.bool,
    notRelated: PropTypes.bool,
  }).isRequired,
  productType: PropTypes.string.isRequired,
  idName: PropTypes.string.isRequired,
};
