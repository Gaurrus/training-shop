import { Form, Formik, useFormik } from 'formik';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';

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
  productType,
}) => {
  return (
    <Formik initialValues={{ toggle: false }}>
      <div className={styles.wrapper}>
        <div className={styles.filterMenu}>
          <Form
            className={styles.filterList}
            onChange={(e) => {
              onColorChange(e.target.id);
            }}
          >
            <h4 className={styles.title}>Color</h4>
            <div className={styles.itemWrapper} data-test-id='filters-color'>
              {giveUniqueColors()?.map((item) => (
                <label htmlFor={item} key={item} className={styles.item}>
                  <div className={styles.colorDisc} style={{ backgroundColor: `${item}` }} />
                  <input
                    type='checkbox'
                    id={item}
                    className={styles.checkbox}
                    data-test-id={`filter-color-${item}`}
                    name='toggle'
                  />
                  <span className={styles.itemName}>{item}</span>
                </label>
              ))}
            </div>
          </Form>
          <Form
            className={styles.filterList}
            onChange={(e) => {
              onSizeChange(e.target.id);
            }}
          >
            <h4 className={styles.title}>Size</h4>
            <div className={styles.itemWrapper} data-test-id='filters-size'>
              {giveUniqueSizes()?.map((item) => (
                <label htmlFor={item} key={item} className={styles.item}>
                  <input
                    type='checkbox'
                    id={item}
                    className={styles.checkbox}
                    data-test-id={`filter-size-${item}`}
                    name='toggle'
                  />
                  <span className={styles.itemName}>{item}</span>
                </label>
              ))}
            </div>
          </Form>
          <Form
            className={styles.filterList}
            onChange={(e) => {
              onBrandChange(e.target.id);
            }}
          >
            <h4 className={styles.title}>Brand</h4>
            <div className={styles.itemWrapper} data-test-id='filters-brand'>
              {giveUniqueBrands()?.map((item) => (
                <label htmlFor={item} key={item} className={styles.item}>
                  <input
                    type='checkbox'
                    id={item}
                    className={styles.checkbox}
                    data-test-id={`filter-brand-${item}`}
                    name='toggle'
                  />
                  <span className={styles.itemName}>{item}</span>
                </label>
              ))}
            </div>
          </Form>
          <Form
            className={styles.filterList}
            onChange={(e) => {
              onPriceChange(e.target.id);
            }}
          >
            <h4 className={styles.title}>Price</h4>
            <div className={styles.itemWrapper}>
              {filterData.prices.map((item) => (
                <label htmlFor={item.prop} className={styles.item} key={item.prop}>
                  <input type='checkbox' id={item.prop} className={styles.checkbox} name='toggle' />
                  <span className={styles.itemName}>{item.prop}</span>
                </label>
              ))}
            </div>
          </Form>
        </div>
      </div>
    </Formik>
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
  productType: PropTypes.string.isRequired,
};
