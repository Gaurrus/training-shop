import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import { Brend } from '../../brend/brend';
import { Rating } from '../../rating/rating';
import { RatingBig } from '../../rating-big/rating-big';
import { Related } from './realated';
import { Share } from '../share';
import { ProductSwiper } from '../swiper/product-swiper';
import { ReviewForm } from '../review-form/review-form';
import { ReviewModal } from '../review-modal';

import hangler from './assets/clothes-hanger.svg';
import favorites from './assets/favorites-unactive.svg';
import compare from './assets/compare-unactive.svg';
import review from './assets/review.svg';

import { cartSelector, productSelector } from '../../../selectors';
import { addProductInCart, removeProduct } from '../../store/cart-state';

import { getProductRequest } from '../../store/product-state';
import { brendsColor } from '../../constants/brends-color';
import { INITIAL_DRESS } from '../../constants/initial-dress';
import { deliveryInfo } from '../../constants/delivery-Info';

import './product.scss';
import { disableBodyScroll, enableBodyScroll } from '../../utils/scroll-lock';

export const ProductPage = ({ dresses, productType, isProductsError }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [dress, setDress] = useState(INITIAL_DRESS);
  const [isColorChecked, setIsColorChecked] = useState(0);
  const [choosedColor, setChoosedColor] = useState(dress?.images[0].color);
  const [isSizeChecked, setIsSizeChecked] = useState(0);
  const [choosedSize, setChoosedSize] = useState(dress?.sizes[0]);
  const cartArrProducts = useSelector(cartSelector);
  const [cartUrl, setCartUrl] = useState(dress?.images[0].url);
  const [isDisabled, setIsDisablled] = useState(true);
  const [isReviewActive, setReviewActive] = useState(false);
  const [postData, setPostData] = useState({});
  const [send, setSend] = useState(false);
  const [responseReviews, setResponseReviews] = useState([]);

  const { data, isLoading, isError } = useSelector(productSelector);

  useEffect(() => {
    setIsColorChecked(0);
    setChoosedColor(dress?.images[0].color);
    setIsSizeChecked(0);
    setChoosedSize(dress?.sizes[0]);
    setCartUrl(dress?.images[0].url);
  }, [id, dress]);

  useEffect(() => {
    if (dresses?.find((item) => item.id === id)) {
      setDress(dresses?.find((item) => item.id === id));
    } else setDress(data);
  }, [dresses, setDress, id, data, isProductsError]);

  const colors = Array.from(new Set(dress?.images.map((image) => image.color)));

  const colorPhotos = dress?.images?.reduce((acc, image) => {
    if (!acc.find((item) => item.color === image.color)) acc.push(image);
    return acc;
  }, []);

  const colorImageOnClick = (e, item, url) => {
    if (isColorChecked !== e) {
      setIsColorChecked(e);
      setChoosedColor(item.color);
      setCartUrl(url);
    } else {
      setIsColorChecked(false);
      setChoosedColor('Choose yur color');
    }
  };

  const sizeOnClick = (e, item) => {
    if (isSizeChecked !== e) {
      setIsSizeChecked(e);
      setChoosedSize(item);
    } else {
      setIsSizeChecked(false);
      setChoosedSize('Choose yur size');
    }
  };

  const addProduct = (dressCart, color, size, price, cartId, url) => {
    dispatch(addProductInCart({ dressCart, color, size, price, cartId, url }));
  };

  const handleRemove = (productCartId, price) => {
    dispatch(removeProduct({ productCartId, price }));
  };
  const productCartId = id + choosedColor + choosedSize;

  useEffect(() => {
    if (choosedColor === 'Choose yur color' && choosedSize === 'Choose yur size') {
      setIsDisablled(true);
    } else setIsDisablled(false);
  }, [choosedColor, choosedSize]);

  const handleClick = (e, dressCart, color, size, price, cartId, url) => {
    if (e.target.innerText === 'REMOVE') {
      handleRemove();
    } else {
      addProduct(dressCart, color, size, price, cartId, url);
    }
  };

  const handleModalToggle = () => {
    if (isReviewActive) {
      setReviewActive(!isReviewActive);
      enableBodyScroll();
    } else {
      setReviewActive(!isReviewActive);
      disableBodyScroll({ savePosition: true });
    }
  };

  useEffect(() => {
    if (!dresses?.find((item) => item.id === id)) {
      dispatch(getProductRequest({ id }));
    }
  }, [dispatch, dresses, id]);

  useEffect(() => {
    if (dress?.reviews?.length < data?.reviews?.length && id === data?.id) {
      setResponseReviews(data?.reviews);
      setReviewActive(false);
    } else setResponseReviews(dress?.reviews);
  }, [dress?.reviews, data?.reviews]);

  return (
    <div
      className={classNames('wrapper', { 'wraper-blur': isLoading || isError })}
      data-test-id={`product-page-${productType}`}
    >
      {isError ? (
        <div className='error-block'>Продукт не найден</div>
      ) : (
        <div className='header-wrapper'>
          <div className='header'>
            <div className='nav'>
              <ul className='nav-list'>
                <li className='nav-item'>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>►</li>
                <li className='nav-item'>
                  <NavLink to={`/${productType}`}>{dress?.category}</NavLink>
                </li>
                <li className='nav-item'>►</li>
                <li className='nav-item'>{dress?.name}</li>
              </ul>
              <Share />
            </div>
            <h2 className='title'>{dress?.name}</h2>
            <div className='rating'>
              <div className='stars'>
                <div className='starsBlock'>
                  <Rating rating={dress?.rating} />
                </div>
                <span className='num-of-reviews'>{responseReviews?.length} Reviews</span>
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
      )}
      {isError ? (
        <div className='error-block'>Продукт не найден</div>
      ) : (
        <div className='product'>
          <div className='left-block'>
            <ProductSwiper images={dress?.images} data-test-id='main-slider' />
          </div>
          <div className='right-block'>
            <div className='specifications'>
              <div className='color'>
                <span className='specifications-title'>Color: </span>
                <span className='colorised-text'>{choosedColor}</span>{' '}
                <div className='color-choice'>
                  <ul className='color-choice-list'>
                    {colorPhotos?.map((item, e) => (
                      <li
                        className='color-choice-item'
                        aria-hidden
                        onClick={() => colorImageOnClick(e, item, item.url)}
                      >
                        <img
                          src={`https://training.cleverland.by/shop${item.url}`}
                          alt='variant-of-color'
                          className={classNames('color-choice-img', { 'choose-active': isColorChecked === e })}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className='specifications-title'>Size: </span>
              <span className='colorised-text'>{choosedSize}</span>
              <ul className='size-choice-list'>
                {dress?.sizes.map((item, e) => (
                  <li
                    className={classNames('size-choice-item', { 'choose-active': isSizeChecked === e })}
                    aria-hidden
                    onClick={() => sizeOnClick(e, item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className='size-guide'>
                <img src={hangler} alt='' className='guide-img' />
                <span className='guide-text'>Size guide</span>
              </div>
              <div className='horisontal-line' />
              <div className='purchase-block'>
                <span className='price'>$ {dress?.price}</span>
                <button
                  disabled={isDisabled}
                  data-test-id='add-cart-button'
                  type='button'
                  className='add-to-cart-button'
                  onClick={(e) => {
                    handleClick(e, dress, choosedColor, choosedSize, dress?.price, productCartId, cartUrl);
                  }}
                >
                  {' '}
                  {!cartArrProducts.cart?.includes(cartArrProducts.cart.find((item) => productCartId === item.cartId))
                    ? 'Add to cart'
                    : 'Remove'}
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
                    <span className='parameters'>
                      {colors.map((item) => (
                        <span> {item}</span>
                      ))}
                    </span>
                  </span>
                  <span className='additional-parameter'>
                    Size:
                    <span className='parameters'>
                      {dress?.sizes.map((item) => (
                        <span className='size-choice-item'> {item}</span>
                      ))}
                    </span>
                  </span>
                  <span className='additional-parameter'>
                    Material:
                    <span className='parameters'> {dress?.material}</span>
                  </span>
                </div>
              </div>
              <div className='horisontal-line' />
              <div className='reviews'>
                <h3 className='reviews-title'>REVIEWS</h3>
                <div className='add-review'>
                  <div className='stars'>
                    <div className='starsBlock'>
                      <RatingBig rating={dress?.rating} />
                    </div>
                    <span className='num-of-reviews'>{responseReviews?.length} Reviews</span>
                  </div>
                  <div className='write-review'>
                    <img src={review} alt='' className='review-ico' />
                    <span
                      data-test-id='review-button'
                      aria-hidden
                      onClick={() => {
                        setReviewActive(true);
                      }}
                      className='write-review-text'
                    >
                      Write a review
                    </span>
                  </div>
                </div>
                <div className='posts'>
                  {responseReviews?.map((post) => (
                    <div className='post'>
                      <div className='post-title'>
                        <span className='user-name'>{post.name}</span>
                        {/* <span className='time-of-review'>3 months ago</span> */}
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
      )}
      <Related dresses={dresses} productType={productType} idName={dress.name} />
      <ReviewModal isReviewActive={isReviewActive} handleModalToggle={handleModalToggle}>
        <ReviewForm
          id={id}
          postData={postData}
          setPostData={setPostData}
          send={send}
          setSend={setSend}
          handleModalToggle={handleModalToggle}
          setReviewActive={setReviewActive}
        />
      </ReviewModal>
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
  isProductsError: PropTypes.bool.isRequired,
};
