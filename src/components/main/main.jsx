/* eslint-disable react/prop-types */
import { Clothers } from './clothers';
import { Promotion } from './promotion';
import { Advantage } from './advantage/advantage';
import { Intro } from './intro/intro';
import { Subscription } from './subscription/subscription';
import { Blog } from './blog';

import { store } from '../constants/store';

import styles from './main.module.scss';

export const Main = ({ realMarketJson }) => (
  <main className={styles.wrapper}>
    <div className={styles.main}>
      <Intro />
      <Advantage />
      <div className={styles.contentWrapper}>
        <Clothers dresses={realMarketJson.women} productType='women' />
        <Clothers dresses={realMarketJson.men} productType='men' />
      </div>
      <Promotion />
      <Subscription />
      <Blog />
    </div>
  </main>
);
