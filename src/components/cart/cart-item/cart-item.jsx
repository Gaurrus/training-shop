/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { cartProductSelector } from '../../../selectors';
import { changeCountMinus, changeCountPlus, setSumm } from '../../store/cart-state';

import styles from './cart-item.module.scss';
import { changeProduct } from '../../store/product-cart-state';

export const CartItem = ({ url, name, color, size, handleRemove, cartId, price, trashIco, count }) => {
  const [totalSumm, setTotalSumm] = useState(price);
  const dispatch = useDispatch();

  const increment = (productCartId) => {
    dispatch(changeCountPlus({ productCartId }));
  };
  const decrement = (productCartId) => {
    dispatch(changeCountMinus({ productCartId }));
  };

  return (
    <div className={styles.card}>
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
              <div className={styles.buttonMinus} aria-hidden onClick={() => decrement(cartId)}>
                -
              </div>
              <input type='number' className={styles.amount} min='1' value={count} />
              <div className={styles.buttonPlus} aria-hidden onClick={() => increment(cartId)}>
                +
              </div>
            </div>
            <span className={styles.price}>${(price * count).toFixed(2)}</span>
            <img
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
