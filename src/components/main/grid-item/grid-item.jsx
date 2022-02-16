import propTypes from 'prop-types';
import classNames from 'classnames';

import { Rating } from '../../rating/rating';

import styles from './grid-item.module.scss';
import saleStyles from './sale.module.scss';

export const GridItem = ({ img, title, price, sale, notRelated, rating }) => (
  <div className={classNames(styles.item, { [styles.notRelated]: notRelated })}>
    <div className={classNames(saleStyles.sale, { [saleStyles.active]: sale })}>{sale}</div>
    <img src={`https://training.cleverland.by/shop${img}`} alt='Img' className={styles.img} />
    <span className={styles.title}>{title}</span>
    <div className={styles.priceBlock}>
      <span className={styles.price}>
        $ {price}
        <span className={classNames(saleStyles.oldPrice, { [saleStyles.oldPriceActive]: sale })}>$ {+price}</span>{' '}
      </span>
      <Rating rating={rating} />
    </div>
  </div>
);

GridItem.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  sale: propTypes.string.isRequired,
  notRelated: propTypes.bool.isRequired,
  rating: propTypes.number.isRequired,
};
