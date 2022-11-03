import { PropTypes } from 'prop-types';

import filter from './assets/filter-ico.svg';
import lines from './assets/view-list-lines.svg';
import grid from './assets/view-list-grid.svg';
import cross from './assets/cross.svg';
import styles from './filter.module.scss';

export const Filter = ({ filterOnCick, isFilterActive }) => (
  <div className={styles.wrapper}>
    <div className={styles.filtres}>
      <div className={styles.filter} aria-hidden onClick={filterOnCick} data-test-id='filter-button'>
        {isFilterActive ? <img src={cross} alt='cross-button' /> : <img src={filter} alt='filter-button' />}
        <span className={styles.filerText}>Filter</span>
      </div>
      <div className={styles.viewStyle}>
        <img src={lines} alt='lines-ico' />
        <img src={grid} alt='grid-ico' />
      </div>
    </div>
  </div>
);

Filter.propTypes = {
  filterOnCick: PropTypes.func.isRequired,
  isFilterActive: PropTypes.bool.isRequired,
};
