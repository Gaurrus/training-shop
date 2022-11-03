import shareImg from './assets/share.svg';

import styles from './share.module.scss';

export const Share = () => (
  <div className={styles.share}>
    <img src={shareImg} alt='share-img' className={styles.shareImg} />
    <span className={styles.shareText}>Share</span>
  </div>
);
