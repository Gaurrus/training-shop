import classNames from 'classnames';
import { realMarket } from '../../constants/real-market';

import trashIco from './assets/trash-ico.svg';

import styles from './cart-products.module.scss';

export const CartProducts = () => (
  <div className={styles.wrapper}>
    <div className={styles.cards}>
      {realMarket.women
        .filter((_, index) => index < 2)
        .map((item) => (
          <div className={styles.card}>
            <div className={styles.productInfo}>
              <img
                src={`https://training.cleverland.by/shop${item.images[0].url}`}
                alt='card'
                className={styles.cardImg}
              />
              <div className={styles.productShortInfo}>
                <div className={styles.textInfo}>
                  <span className={styles.title}>{item.name}</span>
                  <span className={styles.properties}>
                    {item.images[0].color}, {item.sizes[0]}
                  </span>
                </div>
                <div className={styles.priceAndAmount}>
                  <input type='number' className={styles.amount} />
                  <span className={styles.price}>${item.price}</span>
                  <img src={trashIco} alt='trashIco' className={styles.trash} />
                </div>
              </div>
            </div>
            <div className={styles.horisontalLine} />
          </div>
        ))}
    </div>
  </div>
);
