import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { CartProducts } from './cart-products';
import { CartDelivery } from './cart-delivery/cart-delivery';
import { CartPayment } from './cart-payment';

import styles from './cart.module.scss';

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
        {isProductsActive && <CartProducts />}
        {isDelyveryActive && <CartDelivery />}
        {isPaymentActive && <CartPayment />}
      </div>
    </div>
  );
};

Cart.propTypes = {
  closeCart: PropTypes.func.isRequired,
};
