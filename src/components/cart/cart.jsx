import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import { CartProducts } from './cart-products';
import { CartDelivery } from './cart-delivery/cart-delivery';
import { CartPayment } from './cart-payment';

import styles from './cart.module.scss';
import { cartSelector } from '../../selectors';

export const Cart = ({ closeCart }) => {
  const [isProductsActive, setIsProductsActive] = useState(false);
  const [isDelyveryActive, setIsDelyveryActive] = useState(false);
  const [isPaymentActive, setIsPaymentActive] = useState(false);

  useEffect(() => setIsProductsActive(true), []);

  const cartProductsOnClick = () => {
    setIsProductsActive(true);
    setIsPaymentActive(false);
    setIsDelyveryActive(false);
  };
  const cartDelyveryOnClick = () => {
    setIsProductsActive(false);
    setIsDelyveryActive(true);
    setIsPaymentActive(false);
  };
  const cartPaymentOnClick = () => {
    setIsProductsActive(false);
    setIsDelyveryActive(false);
    setIsPaymentActive(true);
  };

  const cartArrProducts = useSelector(cartSelector);

  const summFromArr = cartArrProducts?.cart?.reduce((summ, item) => {
    return summ + item.price * item.count;
  }, 0);

  return (
    <div className={styles.cart} data-test-id='cart'>
      <div className={styles.cartHeader}>
        <span className={styles.title}>Shopping Cart</span>
        <div aria-hidden onClick={closeCart} className={styles.crossButton}>
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.cartNav}>
        <span
          aria-hidden
          className={classNames(styles.navItem, { [styles.itemActive]: isProductsActive })}
          onClick={cartProductsOnClick}
        >
          Item in Cart
        </span>
        /
        <span
          aria-hidden
          className={classNames(styles.navItem, { [styles.itemActive]: isDelyveryActive })}
          onClick={cartDelyveryOnClick}
        >
          Delivery Info
        </span>
        /
        <span
          aria-hidden
          className={classNames(styles.navItem, { [styles.itemActive]: isPaymentActive })}
          onClick={cartPaymentOnClick}
        >
          Payment
        </span>
      </div>
      <div className={styles.cartMain}>
        {isProductsActive && <CartProducts cart={cartArrProducts?.cart} />}
        {isDelyveryActive && <CartDelivery cart={cartArrProducts?.cart} />}
        {isPaymentActive && <CartPayment cart={cartArrProducts?.cart} />}
      </div>
      {cartArrProducts.cart.length ? (
        <div className={styles.cardFooter}>
          <div className={styles.totalPrice}>
            <span className={styles.totalText}>Total</span>
            <span className={styles.totalPrice}>$ {summFromArr.toFixed(2)}</span>
          </div>
          <button type='button' className={classNames(styles.further, styles.button)}>
            Further
          </button>
          <button type='button' className={classNames(styles.viewCart, styles.button)}>
            View Cart
          </button>
        </div>
      ) : (
        <div className={styles.cardFooter}>
          <button type='button' className={classNames(styles.further, styles.button)} onClick={closeCart}>
            Back to shopping
          </button>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  closeCart: PropTypes.func.isRequired,
};
