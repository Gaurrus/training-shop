import classNames from 'classnames';
import styles from './cart-payment.module.scss';

export const CartPayment = () => (
  <div className={styles.wrapper}>
    продукты
    <div className={styles.cardFooter}>
      <div className={styles.totalPrice}>
        <span className={styles.totalText}>Total</span>
        <span className={styles.totalPrice}>$100.500</span>
      </div>
      <button type='button' className={classNames(styles.further, styles.button)}>
        Further
      </button>
      <button type='button' className={classNames(styles.viewCart, styles.button)}>
        View Cart
      </button>
    </div>
  </div>
);
