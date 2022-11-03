/* eslint-disable react/prop-types */
import classNames from 'classnames';

import styles from './success-payment.module.scss';

export const SuccessPayment = ({ closeCart, reset, formik, initialValues }) => {
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
        <div className={styles.successTitle}>Thank you for your order </div>
        <div className={styles.successSubtitle}>Information about your order will appear in your e-mail.</div>
        <div className={styles.successSubtitle}>Our manager will call you back.</div>
      </div>
      <div className={styles.cardFooter}>
        <button
          type='button'
          className={classNames(styles.further, styles.button)}
          onClick={() => {
            closeCart();
            setTimeout(() => reset(), 1000);
            formik.resetForm(initialValues);
          }}
        >
          Back to shopping
        </button>
      </div>
    </div>
  );
};
