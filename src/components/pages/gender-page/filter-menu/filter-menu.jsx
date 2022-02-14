import styles from './filter-menu.module.scss';

const filterData = {
  colors: [
    {
      prop: 'Black',
    },
    {
      prop: 'Cyan',
    },
    {
      prop: 'Green',
    },
    {
      prop: 'Grey',
    },
    {
      prop: 'Pink',
    },
    {
      prop: 'White',
    },
    {
      prop: 'Blue',
    },
  ],
  sizes: [
    {
      prop: 'XL',
    },
    {
      prop: 'L',
    },
    {
      prop: 'M',
    },
    {
      prop: 'S',
    },
    {
      prop: 'XS',
    },
  ],
  brands: [
    {
      prop: 'Ck',
    },
    {
      prop: 'H&M',
    },
    {
      prop: 'Kalles',
    },
    {
      prop: `Levi's`,
    },
    {
      prop: 'Monki',
    },
    {
      prop: 'Nike',
    },
  ],
  prices: [
    {
      prop: '$1200+',
    },
    {
      prop: '$600-$1200',
    },
    {
      prop: '$300-$600',
    },
    {
      prop: '$150-$300',
    },
    {
      prop: '$50-$150',
    },
    {
      prop: '$7-$50',
    },
  ],
};

export const FilterMenu = () => {
  const filter = {};
  return (
    <div className={styles.wrapper}>
      <div className={styles.filterMenu}>
        <div className={styles.filterList}>
          <h4 className={styles.title}>Color</h4>
          <div className={styles.itemWrapper}>
            {filterData.colors.map((item) => (
              <div className={styles.item} key={item.prop}>
                <div className={styles.colorDisc} style={{ backgroundColor: `${item.prop}` }} />
                <span className={styles.itemName}>{item.prop}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.filterList}>
          <h4 className={styles.title}>Size</h4>
          <div className={styles.itemWrapper}>
            {filterData.sizes.map((item) => (
              <div className={styles.item} key={item.prop}>
                <input type='checkbox' className={styles.checkbox} />
                <span className={styles.itemName}>{item.prop}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.filterList}>
          <h4 className={styles.title}>Brand</h4>
          <div className={styles.itemWrapper}>
            {filterData.brands.map((item) => (
              <div className={styles.item} key={item.prop}>
                <input type='checkbox' className={styles.checkbox} />
                <span className={styles.itemName}>{item.prop}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.filterList}>
          <h4 className={styles.title}>Price</h4>
          <div className={styles.itemWrapper}>
            {filterData.prices.map((item) => (
              <div className={styles.item} key={item.prop}>
                <input type='checkbox' className={styles.checkbox} />
                <span className={styles.itemName}>{item.prop}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
