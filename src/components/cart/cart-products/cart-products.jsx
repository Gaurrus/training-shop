/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { realMarket } from '../../constants/real-market';

import trashIco from './assets/trash-ico.svg';

import { removeProduct } from '../../store/cart-state';

import styles from './cart-products.module.scss';

export const CartProducts = ({ cart }) => {
  console.log(cart);
  const dispatch = useDispatch();

  const handleRemove = (dress, color, size, price, cartId) => {
    dispatch(removeProduct(dress, color, size, price, cartId));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {cart.length ? (
          cart
            // .filter((_, index) => index < 10)
            .map((item) => (
              <div className={styles.card} key={cart.cartId}>
                <div className={styles.productInfo}>
                  <img
                    src={`https://training.cleverland.by/shop${item.dressCart.images[0].url}`}
                    alt='card'
                    className={styles.cardImg}
                  />
                  <div className={styles.productShortInfo}>
                    <div className={styles.textInfo}>
                      <span className={styles.title}>{item.dressCart.name}</span>
                      <span className={styles.properties}>
                        {item.color}, {item.size}
                      </span>
                    </div>
                    <div className={styles.priceAndAmount}>
                      <input type='number' className={styles.amount} />
                      <span className={styles.price}>${item.dressCart.price}</span>
                      <img
                        src={trashIco}
                        alt='trashIco'
                        className={styles.trash}
                        aria-hidden
                        onClick={() =>
                          handleRemove(item.dressCart, item.color, item.size, item.dressCart.price, item.cartId)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.horisontalLine} />
              </div>
            ))
        ) : (
          <span className={styles.emptyCart}>Sorry, your cart is empty</span>
        )}
      </div>
    </div>
  );
};
