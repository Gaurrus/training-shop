import womanImg from './assets/woman.svg';
import manImg from './assets/man.svg';

import styles from './subscription.module.scss';

export const Subscription = () => (
  <div className={styles.wrapper}>
    <div className={styles.subscription}>
      <form className={styles.form}>
        <span className={styles.subtitle}>Special Offer</span>
        <h2 className={styles.title}>
          Subscribe{' '}
          <p className={styles.parag}>
            And <span className={styles.sale}> Get 10% Off</span>
          </p>
        </h2>
        <input type='text' placeholder='Enter your email' className={styles.input} />
        <button className={styles.button} type='button'>
          Subscribe
        </button>
      </form>
    </div>
    <img src={womanImg} alt='woman' className={styles.woman} />
    <img src={manImg} alt='man' className={styles.man} />
  </div>
);
