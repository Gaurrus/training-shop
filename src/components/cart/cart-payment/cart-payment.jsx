/* eslint-disable react/prop-types */
import classNames from 'classnames';
import styles from './cart-payment.module.scss';

export const CartPayment = ({ cart }) => (
  <div className={styles.wrapper}>
    {cart.length ? <div>payments</div> : <span className={styles.emptyCart}>Sorry, your cart is empty</span>}
  </div>
);
