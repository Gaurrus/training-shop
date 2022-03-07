import { NavLink, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
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
  const [checkedPrices, setCheckedPrices] = useState([]);
  const [filteredArrDresses, setFilteredArrDresses] = useState([]);

  const filterOnCick = () => setIsFIlterActive(!isFilterActive);

  const giveUniqueColors = () =>
    dresses?.reduce((acc, dress) => Array.from(new Set([...acc, ...dress.images.map((image) => image.color)])), []);
  const giveUniqueBrands = () => Array.from(new Set(dresses?.map((dress) => dress.brand)));
  const giveUniqueSizes = () => dresses?.reduce((acc, dress) => Array.from(new Set([...acc, ...dress.sizes])), []);

  const onColorChange = (item) => {
    if (checkedColors?.includes(item)) {
      setCheckedColors(checkedColors?.filter((color) => color !== item));
    } else {
      setCheckedColors([...checkedColors, item]);
    }
  };
  const onSizeChange = (item) => {
    if (checkedSizes?.includes(item)) {
      setCheckedSizes(checkedSizes?.filter((size) => size !== item));
    } else {
      setCheckedSizes([...checkedSizes, item]);
    }
  };
  const onBrandChange = (item) => {
    if (checkedBrands?.includes(item)) {
      setCheckedBrands(checkedBrands?.filter((brand) => brand !== item));
    } else {
      setCheckedBrands([...checkedBrands, item]);
    }
  };
  const onPriceChange = (min, max) => {
    if (checkedPrices?.find((price) => price?.min === min)) {
      setCheckedPrices(checkedPrices?.filter((price) => price.min !== min));
    } else {
      setCheckedPrices([...checkedPrices, { min, max }]);
    }
  };

  const includesSizes = (sizes) => {
    const filteredSizes = sizes.filter((size) => checkedSizes.includes(size));
    if (filteredSizes.length > 0) return true;
    return false;
  };
  const includesColors = (images) => {
    const filteredColors = images.filter((image) => checkedColors.includes(image.color));
    if (filteredColors.length > 0) return true;
    return false;
  };
  const includesPrices = (price) => {
    const filteredPrices = checkedPrices.filter(
      (checkedPrice) => checkedPrice.min <= price && price <= checkedPrice.max
    );
    if (filteredPrices.length > 0) return true;
    return false;
  };

  useEffect(() => {
    const checkedDresses = dresses?.filter(
      (dress) =>
        (!checkedBrands.length || checkedBrands.includes(dress.brand)) &&
        (!checkedSizes.length || includesSizes(dress.sizes)) &&
        (!checkedColors.length || includesColors(dress.images)) &&
        (!checkedPrices.length || includesPrices(dress.price))
    );
    setFilteredArrDresses(checkedDresses);
  }, [checkedBrands, checkedSizes, checkedColors, checkedPrices, dresses]);

  useEffect(() => {
    setCheckedColors([]);
    console.log(checkedColors, 'colors');
    setCheckedSizes([]);
    console.log(checkedSizes, 'sizes');
    setCheckedBrands([]);
    console.log(checkedBrands, 'brands');
    setCheckedPrices([]);
    console.log(checkedPrices, 'prices');
  }, [productType]);

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
        <Filter filterOnCick={filterOnCick} isFilterActive={isFilterActive} />
        <div className={classNames(styles.menu, { [styles.menuActive]: isFilterActive })}>
          <FilterMenu
            giveUniqueColors={giveUniqueColors}
            giveUniqueSizes={giveUniqueSizes}
            giveUniqueBrands={giveUniqueBrands}
            onColorChange={onColorChange}
            onSizeChange={onSizeChange}
            onBrandChange={onBrandChange}
            onPriceChange={onPriceChange}
            productType={productType}
          />
          <div className={styles.checkedString}>
            <span className={styles.stringTitle}>{`${filteredArrDresses?.length} items Found`}</span>
            {checkedColors.length > 0 ? (
              <span className={styles.stringText}>Color: {checkedColors.join('; ')}; </span>
            ) : (
              ''
            )}
            {checkedSizes.length > 0 ? (
              <span className={styles.stringText}>Size: {checkedSizes.join('; ')}; </span>
            ) : (
              ''
            )}
            {checkedBrands.length > 0 ? (
              <span className={styles.stringText}>Brand: {checkedBrands.join('; ')}; </span>
            ) : (
              ''
            )}
            {checkedPrices.length > 0 ? (
              <span className={styles.stringText}>
                Price:{' '}
                {checkedPrices?.map((item) => (
                  <span>
                    {item?.min}-{item?.max};{' '}
                  </span>
                ))}
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
        <GridBlock dresses={filteredArrDresses} productType={productType} />
        <div className={styles.loading}>
          <div className={styles.loadinIco} />
        </div>
      </div>
    </div>
  );
};

GenderPage.propTypes = {
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
