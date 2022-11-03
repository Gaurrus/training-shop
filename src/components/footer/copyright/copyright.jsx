import { Brend } from '../../brend';

import { brendsShadow } from '../../constants/brends-shadow';

import styles from './copyright.module.scss';

export const Copyright = () => (
  <div className={styles.wrapper}>
    <div className={styles.copyright}>
      <div className={styles.item}>Copyright © 2032 all rights reserved</div>
      <div className={styles.item}>
        <div className={styles.list}>
          {brendsShadow.map((brend) => (
            <Brend key={brend.id} src={brend.src} />
          ))}
        </div>
      </div>
      <div className={styles.item}>
        <a href='https://clevertec.ru/study/frontend.html' target='_blank' rel='noreferrer'>
          Clevertec.ru/training
        </a>
      </div>
    </div>
  </div>
);
