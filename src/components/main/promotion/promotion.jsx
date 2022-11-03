import styles from './promotion.module.scss';

export const Promotion = () => (
  <div className={styles.wrapper}>
    <div className={styles.promotion}>
      <div className={styles.itemLeft}>
        <div className={styles.banner}>
          <span className={styles.subtitle}>New Season</span>
          <span className={styles.title}>lookbook collection</span>
        </div>
      </div>
      <div className={styles.itemRight}>
        <div className={styles.banner}>
          <span className={styles.subtitle}>Sale</span>
          <span className={styles.title}>
            Get UP to <span className={styles.sale}>50% off</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);
