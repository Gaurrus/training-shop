import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

import { GridItem } from '../grid-item';

import styles from './grid-block.module.css';

export const GridBlock = ({ dresses, productType }) => (
  <div className={styles.wrapper}>
    <div className={styles.gridBlock}>
      {dresses.map((item) => (
        <NavLink
          key={item.id}
          to={`/${productType}/${item.id}`}
          className={styles.link}
          data-test-id={`clothers-card-${productType}`}
        >
          <GridItem
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            sale={item.sale}
            rating={item.rating}
          />
        </NavLink>
      ))}
    </div>
  </div>
);

GridBlock.propTypes = {
  dresses: propTypes.arrayOf({
    sex: propTypes.string,
    title: propTypes.string,
    img: propTypes.string,
    price: propTypes.string,
    id: propTypes.string,
    rating: propTypes.string,
    sale: propTypes.bool,
  }).isRequired,
  productType: propTypes.string.isRequired,
};
