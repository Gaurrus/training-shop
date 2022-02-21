import styles from './cart.module.scss';

export const Cart = () => {
  const cart = [];
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <span className={styles.title}>Shopping Cart</span>
        <div className={styles.crossButton}>
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.cartNav}>
        <span className={styles.navItem}>Item in Cart</span>/<span className={styles.navItem}>Delivery Info</span>/
        <span className={styles.navItem}>Payment</span>
      </div>
      <div className={styles.cartMain}>
        <div className={styles.products}>
          <div className={styles.product}>Продукт</div>
          <div className={styles.horisontalLine} />
        </div>
      </div>
    </div>
  );
};
