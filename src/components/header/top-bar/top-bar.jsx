import { MiniSocials } from '../../mini-socials/mini-socials';

import phoneImg from './assets/phone-top-bar.svg';
import markerImg from './assets/location-marker-top-bar.svg';
import clockImg from './assets/clock-top-bar.svg';

import styles from './top-bar.module.scss';

export const TopBar = () => (
  <div className={styles.wrapper}>
    <div className={styles.topBar}>
      <div className={styles.contacts}>
        <div className={styles.item}>
          <img src={phoneImg} alt='Phone' />
          +375 29 100 20 30
        </div>
        <div className={styles.item}>
          <img src={markerImg} alt='Marker' />
          Belarus, Gomel, Lange 17
        </div>
        <div className={styles.item}>
          <img src={clockImg} alt='Clock' />
          All week 24/7
        </div>
      </div>
      <MiniSocials />
    </div>
  </div>
);
