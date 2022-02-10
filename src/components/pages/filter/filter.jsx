import filter from './assets/filter-ico.svg';
import lines from './assets/view-list-lines.svg';
import grid from './assets/view-list-grid.svg';
import downArrow from './assets/arrow.svg';

import styles from './filter.module.scss';

export const Filter = () => (
  <div className={styles.wrapper}>
    <div className={styles.filtres}>
      <div className={styles.filter}>
        <img src={filter} alt='' />
        <span className={styles.filerText}>Filter</span>
      </div>
      <div className={styles.viewStyle}>
        <img src={lines} alt='' />
        <img src={grid} alt='' />
      </div>
      <div className={styles.bestsellers}>
        <span className={styles.bestsellersText}>BESTSELLERS</span>
        <img src={downArrow} alt='arrow' className={styles.downArrow} />
      </div>
    </div>
  </div>
);
