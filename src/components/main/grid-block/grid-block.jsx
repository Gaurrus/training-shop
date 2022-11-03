import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GridItem } from '../grid-item';

import styles from './grid-block.module.scss';

// eslint-disable-next-line react/prop-types
export const GridBlock = ({ dresses, productType, particular }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gridBlock}>
        {particular
          ? dresses
              ?.filter((item) => item?.particulars[particular])
              ?.filter((_, index) => index <= 7)
              ?.map((item) => (
                <NavLink
                  key={item.id}
                  to={`/${productType}/${item.id}`}
                  className={styles.link}
                  data-test-id={`clothes-card-${productType}`}
                >
                  <GridItem
                    key={item.id}
                    img={item.images[0].url}
                    title={item.name}
                    price={item.price}
                    sale={item.discount}
                    rating={item.rating}
                  />
                </NavLink>
              ))
          : dresses?.map((item) => (
              <NavLink
                key={item.id}
                to={`/${productType}/${item.id}`}
                className={styles.link}
                data-test-id={`clothes-card-${productType}`}
              >
                <GridItem
                  key={item.id}
                  img={item.images[0].url}
                  title={item.name}
                  price={item.price}
                  sale={item.discount}
                  rating={item.rating}
                />
              </NavLink>
            ))}
      </div>
    </div>
  );
};

GridBlock.propTypes = {
  dresses: PropTypes.arrayOf(
    PropTypes.shape({
      particulars: PropTypes.objectOf({
        isNewArrivals: PropTypes.bool,
        isSpecial: PropTypes.bool,
        isBestseller: PropTypes.bool,
        isMostViewed: PropTypes.bool,
        isFeatured: PropTypes.bool,
      }),
      name: PropTypes.string,
      category: PropTypes.string,
      brand: PropTypes.string,
      material: PropTypes.string,
      rating: PropTypes.number,
      price: PropTypes.number,
      sizes: PropTypes.arrayOf([]),
      discount: PropTypes.number,
      reviews: PropTypes.arrayOf({
        name: PropTypes.string,
        text: PropTypes.string,
        rating: PropTypes.number,
        id: PropTypes.string,
      }),
      images: PropTypes.arrayOf({
        color: PropTypes.string,
        url: PropTypes.string,
        id: PropTypes.string,
      }),
      id: PropTypes.string,
    })
  ).isRequired,
  productType: PropTypes.string.isRequired,
};
