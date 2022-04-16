/* eslint-disable react/prop-types */
import classNames from 'classnames';

import styles from './error-payment.module.scss';

export const ErrorPayment = ({ closeCart, cartProductsOnClick, reset }) => {
  return (
    <div className={styles.successPayment}>
      <div className={styles.cartHeader}>
        <span className={styles.title}>Shopping Cart</span>
        <div aria-hidden onClick={closeCart} className={styles.crossButton}>
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.successMessage}>
        <div className={styles.successTitle}>Sorry, your payment has not been processed.</div>
        <div className={styles.successSubtitle}>
          Failed to pay for the order, the problem is on the side of the bank
        </div>
      </div>
      <div className={styles.cardFooter}>
        <button
          type='button'
          className={classNames(styles.further, styles.button)}
          onClick={() => {
            closeCart();
            setTimeout(() => reset(), 1000);
          }}
        >
          Back to shopping
        </button>
        <button
          type='button'
          className={classNames(styles.viewCart, styles.button)}
          onClick={() => {
            reset();
            cartProductsOnClick();
          }}
        >
          View Cart
        </button>
      </div>
    </div>
  );
};
