import { NavLink } from 'react-router-dom';
import propTypes, { arrayOf, objectOf, string } from 'prop-types';

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
  dresses: propTypes.arrayOf({
    particulars: objectOf({
      isNewArrivals: propTypes.bool,
      isSpecial: propTypes.bool,
      isBestseller: propTypes.bool,
      isMostViewed: propTypes.bool,
      isFeatured: propTypes.bool,
    }),
    name: propTypes.string,
    category: propTypes.string,
    brand: propTypes.string,
    material: propTypes.string,
    rating: propTypes.number,
    price: propTypes.number,
    sizes: arrayOf(string),
    discount: propTypes.number,
    reviews: arrayOf({
      name: propTypes.string,
      text: propTypes.string,
      rating: propTypes.number,
      id: propTypes.string,
    }),
    images: arrayOf({
      color: propTypes.string,
      url: propTypes.string,
      id: propTypes.string,
    }),
  }).isRequired,
  productType: propTypes.string.isRequired,
};
