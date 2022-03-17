/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { cartProductSelector } from '../../../selectors';
import { setSumm } from '../../store/cart-state';

import styles from './cart-item.module.scss';

export const CartItem = ({ url, name, color, size, handleRemove, cartId, price, trashIco }) => {
  const [count, setCount] = useState(1);
  const [totalSumm, setTotalSumm] = useState(price);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalSumm(price * count);
  }, [count]);

  useEffect(() => {
    dispatch(setSumm({ totalSumm, count }));
  }, [count]);

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
              <div className={styles.buttonMinus} aria-hidden onClick={() => setCount(count - 1)}>
                -
              </div>
              <input type='number' className={styles.amount} min='1' value={count} />
              <div className={styles.buttonPlus} aria-hidden onClick={() => setCount(count + 1)}>
                +
              </div>
            </div>
            <span className={styles.price}>${totalSumm.toFixed(2)}</span>
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
