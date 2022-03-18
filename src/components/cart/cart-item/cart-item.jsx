/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeCountMinus, changeCountPlus } from '../../store/cart-state';

import styles from './cart-item.module.scss';

export const CartItem = ({ url, name, color, size, handleRemove, cartId, price, trashIco, count }) => {
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(false);

  const increment = (productCartId) => {
    dispatch(changeCountPlus({ productCartId }));
  };
  const decrement = (productCartId) => {
    if (count > 0) {
      dispatch(changeCountMinus({ productCartId }));
    } else setIsDisable(true);
  };

  return (
    <div className={styles.card} data-test-id='cart-card'>
      <div className={styles.productInfo}>
        <img src={`https://training.cleverland.by/shop${url}`} alt='card' className={styles.cardImg} />
        <div className={styles.productShortInfo}>
          <div className={styles.textInfo}>
            <span className={styles.title}>{name}</span>
            <span className={styles.properties}>
              {color}, {size}
            </span>
          </div>
          <div className={styles.priceAndAmount}>
            <div className={styles.amountBlock}>
              <div
                className={styles.buttonMinus}
                aria-hidden
                onClick={() => decrement(cartId)}
                data-test-id='minus-product'
                disable={isDisable}
              >
                -
              </div>
              <input type='number' className={styles.amount} min='1' value={count} />
              <div
                className={styles.buttonPlus}
                aria-hidden
                onClick={() => increment(cartId)}
                data-test-id='plus-product'
              >
                +
              </div>
            </div>
            <span className={styles.price}>${(price * count).toFixed(2)}</span>
            <img
              data-test-id='remove-product'
              src={trashIco}
              alt='trashIco'
              className={styles.trash}
              aria-hidden
              onClick={() => {
                handleRemove(cartId, price);
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.horisontalLine} />
    </div>
  );
};
