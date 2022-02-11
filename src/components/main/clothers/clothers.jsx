import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { GridBlock } from '../grid-block/grid-block';

import styles from './clothers.module.scss';

export const Clothers = ({ dresses, productType }) => (
  <div data-test-id={`clothes-${productType}`}>
    <div className={styles.titleBlock}>
      <NavLink to={`/${productType}`}>
        <span className={styles.title}>{productType}’S</span>
      </NavLink>
      <ul className={styles.gridList}>
        <li>NEW ARRIVALS</li>
        <li>SPECIALS</li>
        <li>BESTSELLERS</li>
        <li>MOST VIEWED</li>
        <li>FEATURED PRODUCTS</li>
      </ul>
    </div>
    <GridBlock key={productType} dresses={dresses} productType={productType} />
    <NavLink to={`/${productType}`}>
      <div className={styles.button}>See All</div>
    </NavLink>
  </div>
);

Clothers.propTypes = {
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
