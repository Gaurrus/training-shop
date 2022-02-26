import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { GridBlock } from '../grid-block/grid-block';

import { MAIN_PARTICULAR_MENU } from '../../constants/main-particulars';

import styles from './clothers.module.scss';

export const Clothers = ({ dresses, productType }) => {
  const [particular, setParticular] = useState(MAIN_PARTICULAR_MENU[0].particularName);
  return (
    <div data-test-id={`clothes-${productType}`}>
      <div className={styles.titleBlock}>
        <NavLink to={`/${productType}`}>
          <span className={styles.title}>{productType}’S</span>
        </NavLink>
        <ul className={styles.gridList}>
          {MAIN_PARTICULAR_MENU.map((item) => (
            <li aria-hidden key={item.particularName} onClick={() => setParticular(item.particularName)}>
              {item.menuName}
            </li>
          ))}
        </ul>
      </div>
      <GridBlock key={productType} dresses={dresses} productType={productType} particular={particular} />
      <NavLink to={`/${productType}`}>
        <div className={styles.button}>See All</div>
      </NavLink>
    </div>
  );
};

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
