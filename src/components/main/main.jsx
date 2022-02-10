import { Clothers } from './clothers';
import { Promotion } from './promotion';
import { Advantage } from './advantage/advantage';
import { Intro } from './intro/intro';
import { Subscription } from './subscription/subscription';
import { Blog } from './blog';

import { store } from '../constants/store';

import styles from './main.module.scss';

export const Main = () => (
  <main className={styles.wrapper}>
    <div className={styles.main}>
      <Intro />
      <Advantage />
      <div className={styles.contentWrapper}>
        <Clothers dresses={store.womensDress} productType='women' />
        <Clothers dresses={store.mensDress} productType='men' />
      </div>
      <Promotion />
      <Subscription />
      <Blog />
    </div>
  </main>
);
