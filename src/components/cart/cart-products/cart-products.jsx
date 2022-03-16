/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';

import { CartItem } from '../cart-item';

import trashIco from './assets/trash-ico.svg';

import { decrement, increment } from '../../store/product-cart-state';
import { removeProduct } from '../../store/cart-state';
import { cartProductSelector, cartSelector } from '../../../selectors';

import styles from './cart-products.module.scss';

export const CartProducts = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemove = (productCartId, price) => {
    dispatch(removeProduct({ productCartId, price }));
  };

  const decrementAmount = (cartId) => {
    dispatch(decrement({ cartId }));
  };
  const incrementAmount = (cartId) => {
    dispatch(increment({ cartId }));
  };

  const { count } = useSelector(cartProductSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {cart.length ? (
          cart.map((item) => (
            <CartItem
              key={item.cartId}
              handleRemove={handleRemove}
              decrementAmount={decrementAmount}
              incrementAmount={incrementAmount}
              url={item.dressCart.images[0].url}
              name={item.dressCart.name}
              color={item.color}
              size={item.size}
              cartId={item.cartId}
              price={item.dressCart.price}
              trashIco={trashIco}
            />
          ))
        ) : (
          <span className={styles.emptyCart}>Sorry, your cart is empty</span>
        )}
      </div>
    </div>
  );
};
