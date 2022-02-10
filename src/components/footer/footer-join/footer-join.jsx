import { MiniSocials } from '../../mini-socials/mini-socials';

import styles from './footer-join.module.scss';

export const FooterJoin = () => (
  <div className={styles.wrapper}>
    <div className={styles.joingBlock}>
      <div className={styles.title}>BE IN TOUCH WITH US:</div>
      <div className={styles.joing}>
        <input className={styles.input} type='text' placeholder='Enter your email' />
        <span className={styles.joingButton}>JOIN US</span>
      </div>
      <MiniSocials />
    </div>
  </div>
);
