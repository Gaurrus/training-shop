import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { GridBlock } from '../../main/grid-block/grid-block';
import { Share } from '../share';
import { Filter } from '../filter';

import styles from './gender-page.module.scss';

export const GenderPage = ({ productType, dresses }) => (
  <div className={styles.wrapper} data-test-id={`products-page-${productType}`}>
    <div className={styles.women}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink to='/' className={styles.navLink}>
                  Home
                </NavLink>
              </li>
              <li className={styles.navItem}>►</li>
              <li className={styles.navItem}>{productType}</li>
            </ul>
            <Share />
          </div>
          <h2 className={styles.title}>{productType}</h2>
        </div>
      </div>
      <Filter />
      <GridBlock dresses={dresses} productType={productType} />
      <div className={styles.loading}>
        <div className={styles.loadinIco} />
      </div>
    </div>
  </div>
);

GenderPage.propTypes = {
  dresses: PropTypes.arrayOf({
    sex: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
    rating: PropTypes.string,
    sale: PropTypes.bool,
  }).isRequired,
  productType: PropTypes.string.isRequired,
};
