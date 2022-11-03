import { advantageStore } from '../../constants/advantage';

import styles from './advantage.module.scss';

export const Advantage = () => (
  <div className={styles.wrapper}>
    <div className={styles.advantage}>
      {advantageStore.map((item) => (
        <div className={styles.item} key={item.id}>
          <img className={styles.advantageIco} src={item.img} alt='advantage-img' />
          <span className={styles.text}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.subText}>{item.subtitle}</p>
          </span>
        </div>
      ))}
    </div>
  </div>
);
