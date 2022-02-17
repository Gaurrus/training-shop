import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { Brend } from '../../brend/brend';
import { Rating } from '../../rating/rating';
import { RatingBig } from '../../rating-big/rating-big';
import { Related } from './realated';
import { Share } from '../share';
import { ProductSwiper } from '../swiper/product-swiper';

import color01 from './assets/product01-color-variant-blue.jpg';
import color02 from './assets/product01-color-variant-white.jpg';
import color03 from './assets/product01-color-variant-black.jpg';
import color04 from './assets/product01-color-variant-dark-white.jpg';
import hangler from './assets/clothes-hanger.svg';
import favorites from './assets/favorites-unactive.svg';
import compare from './assets/compare-unactive.svg';
import truck from './assets/truck.svg';
import recycler from './assets/recycler.svg';
import mail from './assets/mail.svg';
import review from './assets/review.svg';

import { brendsColor } from '../../constants/brends-color';
import { INITIAL_DRESS } from '../../constants/initial-dress';

import './product.scss';

const colorChoice = [
  {
    src: color01,
  },
  {
    src: color02,
  },
  {
    src: color03,
  },
  {
    src: color04,
  },
];

const sizeArr = [
  {
    size: 'XS',
  },
  {
    size: 'S',
  },
  {
    size: 'M',
  },
  {
    size: 'L',
  },
];

const deliveryInfo = [
  {
    id: '01',
    img: truck,
    title: 'Shipping & Delivery',
  },
  {
    id: '02',
    img: recycler,
    title: 'Returns & Exchanges',
  },
  {
    id: '03',
    img: mail,
    title: 'Ask a question',
  },
];

export const ProductPage = ({ dresses, productType }) => {
  const { id } = useParams();
  const [dress, setDress] = useState(INITIAL_DRESS);

  useEffect(() => {
    setDress(dresses.find((item) => item.id === id));
  }, [dresses, setDress, id]);

  const colors = Array.from(new Set(dress.images.map(({ color }) => color)));

  return (
    <div className='wrapper' data-test-id={`product-page-${productType}`}>
      <div className='header-wrapper'>
        <div className='header'>
          <div className='nav'>
            <ul className='nav-list'>
              <li className='nav-item'>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className='nav-item'>►</li>
              <li className='nav-item'>
                <NavLink to={`/${productType}`}>{dress.category}</NavLink>
              </li>
              <li className='nav-item'>►</li>
              <li className='nav-item'>{dress.name}</li>
            </ul>
            <Share />
          </div>
          <h2 className='title'>{dress.name}</h2>
          <div className='rating'>
            <div className='stars'>
              <div className='starsBlock'>
                <Rating rating={dress.rating} />
              </div>
              <span className='num-of-reviews'>2 Reviews</span>
            </div>
            <div className='storage-info'>
              <span className='purchases' />
              SKU: <span className='value'>777</span>
              <span className='stash'>Availability:</span>
              <span className='value'>In Stock</span>
            </div>
          </div>
        </div>
      </div>
      <div className='product'>
        <div className='left-block'>
          <ProductSwiper images={dress.images} />
        </div>
        <div className='right-block'>
          <div className='specifications'>
            <div className='color'>
              <span className='specifications-title'>Color: </span>
              <span className='colorised-text'>Blue</span>{' '}
              <div className='color-choice'>
                <ul className='color-choice-list'>
                  {colorChoice.map((item) => (
                    <li className='color-choice-item'>
                      <img src={item.src} alt='variant-of-color' className='color-choice-img' />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <span className='specifications-title'>Size: </span>
            <span className='colorised-text'>S</span>
            <ul className='size-choice-list'>
              {sizeArr.map((item) => (
                <li className='size-choice-item'>{item.size}</li>
              ))}
            </ul>
            <div className='size-guide'>
              <img src={hangler} alt='' className='guide-img' />
              <span className='guide-text'>Size guide</span>
            </div>
            <div className='horisontal-line' />
            <div className='purchase-block'>
              <span className='price'>$ {dress.price}</span>
              <button type='button' className='add-to-cart-button'>
                Add to cart
              </button>
              <img src={favorites} alt='like-ico' className='add-to-favorites icon' />
              <img src={compare} alt='compare-ico' className='add-to-compare icon' />
            </div>
            <div className='horisontal-line' />
            <div className='delivery-block'>
              {deliveryInfo.map((item) => (
                <div className='delivery-item' key={item.id}>
                  <img src={item.img} alt='deliv-ico' className='delyvery-img' />
                  <h3 className='delivery-title'>{item.title}</h3>
                </div>
              ))}
            </div>
            <div className='garantie'>
              <h3 className='garanties-title'>guaranteed safe checkout</h3>
              <div className='short-line' />
            </div>
            <div className='brends'>
              {brendsColor.map((brend) => (
                <Brend key={brend.id} src={brend.src} />
              ))}
            </div>
            <div className='horisontal-line' />
            <span className='description'>DESCRIPTION</span>
            <div className='horisontal-line' />
            <div className='additional-info'>
              <h3 className='additional-title'>ADDITIONAL INFORMATION</h3>
              <div className='parameters-wrapper'>
                <span className='additional-parameter'>
                  Color:
                  <span className='parameters'> Blue, White, Black, Grey</span>
                </span>
                <span className='additional-parameter'>
                  Size:
                  <span className='parameters'> XS, S, M, L</span>
                </span>
                <span className='additional-parameter'>
                  Material:
                  <span className='parameters'> {dress.material}</span>
                </span>
              </div>
            </div>
            <div className='horisontal-line' />
            <div className='reviews'>
              <h3 className='reviews-title'>REVIEWS</h3>
              <div className='add-review'>
                <div className='stars'>
                  <div className='starsBlock'>
                    <RatingBig rating={dress.rating} />
                  </div>
                  <span className='num-of-reviews'>2 Reviews</span>
                </div>
                <div className='write-review'>
                  <img src={review} alt='' className='review-ico' />
                  <span className='write-review-text'>Write a review</span>
                </div>
                <div className='posts'>
                  {dress.reviews.map((post) => (
                    <div className='post'>
                      <div className='post-title'>
                        <span className='user-name'>{post.name}</span>
                        <span className='time-of-review'>3 months ago</span>
                        <Rating rating={post.rating} />
                      </div>
                      <p className='post-text'>{post.text}</p>
                    </div>
                  ))}
                </div>
                <div className='horisontal-line' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Related dresses={dresses} productType={productType} />
    </div>
  );
};

ProductPage.propTypes = {
  dresses: PropTypes.arrayOf({
    particulars: PropTypes.objectOf({
      isNewArrivals: PropTypes.bool,
      isSpecial: PropTypes.bool,
      isBestseller: PropTypes.bool,
      isMostViewed: PropTypes.bool,
      isFeatured: PropTypes.bool,
    }),
    name: PropTypes.string,
    category: PropTypes.string,
    brand: PropTypes.string,
    material: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    sizes: PropTypes.arrayOf([]),
    discount: PropTypes.number,
    reviews: PropTypes.arrayOf({
      name: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number,
      id: PropTypes.string,
    }),
    images: PropTypes.arrayOf({
      color: PropTypes.string,
      url: PropTypes.string,
      id: PropTypes.string,
    }),
    id: PropTypes.string,
  }).isRequired,
  productType: PropTypes.string.isRequired,
};
