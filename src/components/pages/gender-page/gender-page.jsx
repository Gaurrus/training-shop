import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

import { FilterMenu } from './filter-menu';
import { GridBlock } from '../../main/grid-block/grid-block';
import { Share } from '../share';
import { Filter } from '../filter';

import styles from './gender-page.module.scss';

export const GenderPage = ({ productType, dresses }) => {
  const [isFilterActive, setIsFIlterActive] = useState(false);
  const [checkedColors, setCheckedColors] = useState([]);
  const [checkedSizes, setCheckedSizes] = useState([]);
  const [checkedBrands, setCheckedBrands] = useState([]);

  const filterOnCick = () => setIsFIlterActive(!isFilterActive);

  const giveUniqueColors = () =>
    dresses?.reduce((acc, dress) => Array.from(new Set([...acc, ...dress.images.map((image) => image.color)])), []);
  const giveUniqueBrands = () => Array.from(new Set(dresses?.map((dress) => dress.brand)));
  const giveUniqueSizes = () => dresses?.reduce((acc, dress) => Array.from(new Set([...acc, ...dress.sizes])), []);

  const onColorChange = (item) => {
    console.log(item, `onColorChange`);
    console.log(checkedColors, `initial`);

    if (checkedColors?.includes(item)) {
      setCheckedColors(checkedColors?.filter((color) => color !== item));
      console.log('убрать');
    } else {
      setCheckedColors(...checkedColors, item);
      console.log('дабавить');
    }
  };
  const onSizeChange = (item) => {
    if (checkedSizes?.includes(item)) {
      setCheckedSizes(checkedSizes?.filter((size) => size !== item));
      console.log('убрать');
    } else {
      setCheckedSizes(...checkedColors, item);
      console.log('дабавить');
    }
  };
  const onBrandChange = (item) => {
    if (checkedBrands?.includes(item)) {
      setCheckedBrands(checkedBrands?.filter((brand) => brand !== item));
      console.log('убрать');
    } else {
      setCheckedBrands(...checkedBrands, item);
      console.log('дабавить');
    }
  };

  console.log(checkedColors);
  console.log(checkedBrands);
  console.log(checkedSizes);
  return (
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
        <Filter filterOnCick={filterOnCick} />
        <div className={classNames(styles.menu, { [styles.menuActive]: isFilterActive })}>
          <FilterMenu
            giveUniqueColors={giveUniqueColors}
            giveUniqueSizes={giveUniqueSizes}
            giveUniqueBrands={giveUniqueBrands}
            onColorChange={onColorChange}
            onSizeChange={onSizeChange}
            onBrandChange={onBrandChange}
          />
        </div>
        <GridBlock dresses={dresses} productType={productType} />
        <div className={styles.loading}>
          <div className={styles.loadinIco} />
        </div>
      </div>
    </div>
  );
};

GenderPage.propTypes = {
  dresses: PropTypes.arrayOf({
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
  }).isRequired,
  productType: PropTypes.string.isRequired,
};
