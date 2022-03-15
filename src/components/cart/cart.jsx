import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import { CartProducts } from './cart-products';
import { CartDelivery } from './cart-delivery/cart-delivery';
import { CartPayment } from './cart-payment';

import styles from './cart.module.scss';
import { removeProduct } from '../store/cart-state';
import { cartSelector } from '../../selectors';

export const Cart = ({ closeCart }) => {
  const [isProductsActive, setIsProductsActive] = useState(false);
  const [isDelyveryActive, setIsDelyveryActive] = useState(false);
  const [isPaymentActive, setIsPaymentActive] = useState(false);
  const dispatch = useDispatch();

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

  const cleaner = () => {
    dispatch(removeProduct());
  };

  const cartArrProducts = useSelector(cartSelector);

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <span className={styles.title}>Shopping Cart</span>
        <div aria-hidden onClick={closeCart} className={styles.crossButton}>
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.cartNav}>
        <span aria-hidden className={styles.navItem} onClick={cartProductsOnClick}>
          Item in Cart
        </span>
        /
        <span aria-hidden className={styles.navItem} onClick={cartDelyveryOnClick}>
          Delivery Info
        </span>
        /
        <span aria-hidden className={styles.navItem} onClick={cartPaymentOnClick}>
          Payment
        </span>
      </div>
      <div className={styles.cartMain}>
        {isProductsActive && <CartProducts cart={cartArrProducts?.cart} />}
        {isDelyveryActive && <CartDelivery />}
        {isPaymentActive && <CartPayment />}
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.totalPrice}>
          <span className={styles.totalText}>Total</span>
          <span className={styles.totalPrice}>$ {cartArrProducts.summ.toFixed(2)}</span>
        </div>
        <button type='button' className={classNames(styles.further, styles.button)}>
          Further
        </button>
        <button type='button' className={classNames(styles.viewCart, styles.button)} onClick={cleaner}>
          View Cart
        </button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  closeCart: PropTypes.func.isRequired,
};
