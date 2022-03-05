import { PropTypes } from 'prop-types';

import styles from './filter-menu.module.scss';

const filterData = {
  prices: [
    {
      prop: '$1200+',
      min: 1200,
      max: Infinity,
    },
    {
      prop: '$600-$1200',
      min: 600,
      max: 1200,
    },
    {
      prop: '$300-$600',
      min: 300,
      max: 600,
    },
    {
      prop: '$150-$300',
      min: 150,
      max: 300,
    },
    {
      prop: '$50-$150',
      min: 50,
      max: 150,
    },
    {
      prop: '$7-$50',
      min: 7,
      max: 50,
    },
  ],
};

export const FilterMenu = ({
  giveUniqueColors,
  giveUniqueSizes,
  giveUniqueBrands,
  onColorChange,
  onSizeChange,
  onBrandChange,
  onPriceChange,
}) => {
  const filter = {};
  return (
    <div className={styles.wrapper}>
      <div className={styles.filterMenu}>
        <div className={styles.filterList}>
          <h4 className={styles.title}>Color</h4>
          <div className={styles.itemWrapper} data-test-id='filters-color'>
            {giveUniqueColors()?.map((item) => (
              <label htmlFor={item} key={item} className={styles.item} data-test-id={`filter-color-${item}`}>
                <div className={styles.colorDisc} style={{ backgroundColor: `${item}` }} />
                <input type='checkbox' id={item} className={styles.checkbox} onChange={() => onColorChange(item)} />
                <span className={styles.itemName}>{item}</span>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.filterList}>
          <h4 className={styles.title}>Size</h4>
          <div className={styles.itemWrapper} data-test-id='filters-size'>
            {giveUniqueSizes()?.map((item) => (
              <label htmlFor={item} key={item} className={styles.item} data-test-id={`filter-size-${item}`}>
                <input type='checkbox' id={item} className={styles.checkbox} onChange={() => onSizeChange(item)} />
                <span className={styles.itemName}>{item}</span>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.filterList}>
          <h4 className={styles.title}>Brand</h4>
          <div className={styles.itemWrapper} data-test-id='filters-brand'>
            {giveUniqueBrands()?.map((item) => (
              <label htmlFor={item} key={item} className={styles.item} data-test-id={`filter-brand-${item}`}>
                <input type='checkbox' id={item} className={styles.checkbox} onChange={() => onBrandChange(item)} />
                <span className={styles.itemName}>{item}</span>
              </label>
            ))}
          </div>
        </div>
        <div className={styles.filterList}>
          <h4 className={styles.title}>Price</h4>
          <div className={styles.itemWrapper}>
            {filterData.prices.map((item) => (
              <label htmlFor={item.prop} className={styles.item} key={item.prop}>
                <input
                  type='checkbox'
                  id={item.prop}
                  className={styles.checkbox}
                  onChange={() => onPriceChange(item.min, item.max)}
                />
                <span className={styles.itemName}>{item.prop}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FilterMenu.propTypes = {
  giveUniqueColors: PropTypes.func.isRequired,
  giveUniqueSizes: PropTypes.func.isRequired,
  giveUniqueBrands: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onSizeChange: PropTypes.func.isRequired,
  onBrandChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
};
