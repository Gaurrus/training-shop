import facebookLogo from './assets/facebook-top-bar.svg';
import twitterLogo from './assets/twitter-top-bar.svg';
import instagremmLogo from './assets/instagram-top-bar.svg';
import pinterestLogo from './assets/pinterest-top-bar.svg';

import styles from './mini-socials.module.css';

export const MiniSocials = () => (
  <div className={styles.webLinks}>
    <img className={styles.ico} src={facebookLogo} alt='Clock' />
    <img className={styles.ico} src={twitterLogo} alt='Clock' />
    <img className={styles.ico} src={instagremmLogo} alt='Clock' />
    <img className={styles.ico} src={pinterestLogo} alt='Clock' />
  </div>
);
