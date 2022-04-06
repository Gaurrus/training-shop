import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { useFormik } from 'formik';

import { CartProducts } from './cart-products';
import { CartDelivery } from './cart-delivery/cart-delivery';
import { CartPayment } from './cart-payment';

import { cartSelector, paymentsSelector } from '../../selectors';
import { paymentsAdd } from '../store/payments-state';

import styles from './cart.module.scss';

export const Cart = ({ closeCart }) => {
  const [isProductsActive, setIsProductsActive] = useState(false);
  const [isDelyveryActive, setIsDelyveryActive] = useState(false);
  const [isPaymentActive, setIsPaymentActive] = useState(false);
  const [paymentType, setPaymentType] = useState('');
  const dispatch = useDispatch();

  useEffect(() => setIsProductsActive(true), []);

  const cartProductsOnClick = () => {
    setIsProductsActive(true);
    setIsPaymentActive(false);
    setIsDelyveryActive(false);
  };
  const cartDelyveryOnClick = () => {
    setIsProductsActive(false);
    setIsDelyveryActive(true);
    setIsPaymentActive(false);
  };
  const cartPaymentOnClick = () => {
    setIsProductsActive(false);
    setIsDelyveryActive(false);
    setIsPaymentActive(true);
  };

  const cartArrProducts = useSelector(cartSelector);

  const summFromArr = cartArrProducts?.cart?.reduce((summ, item) => {
    return summ + item.price * item.count;
  }, 0);

  const handleClick = () => {
    if (isProductsActive) {
      cartDelyveryOnClick();
    }
    if (isDelyveryActive) {
      cartPaymentOnClick();
    }
    if (isPaymentActive) {
      cartProductsOnClick();
    }
  };

  const { data } = useSelector(paymentsSelector);

  const formik = useFormik({
    initialValues: {
      phone: '',
      email: '',
      cashEmail: '',
      country: '',
      city: '',
      street: '',
      house: '',
      apartment: '',
      postcode: '',
      storeAddress: '',
      agreenment: false,
      paymentType: '',
      card: '',
      cardDate: '',
      cardCVV: '',
    },
  });

  let paymentArrayProducts = [];
  useEffect(() => {
    paymentArrayProducts = cartArrProducts?.cart?.map((item) => {
      const array = {
        name: item?.dressCart?.name,
        size: item?.size,
        color: item?.color,
        quantity: item?.count,
      };
      return array;
    });
    console.log(paymentArrayProducts);
  }, [cartArrProducts, formik]);

  const handleSelect = () => {
    const postData = {
      products: paymentArrayProducts,
      deliveryMethod: '',
      paymentMethod: paymentType,
      totalPrice: summFromArr?.toFixed(2),
      phone: formik.values.phone,
      email: formik.values.email,
      country: formik.values.country,
      cashEmail: formik.values.cashEmail,
      city: formik.values.city,
      street: formik.values.street,
      house: formik.values.house,
      apartment: formik.values.apartment,
      postcode: formik.values.postcode,
      storeAddress: formik.values.storeAddress,
      card: formik.values.card,
      cardDate: formik.values.cardDate,
      cardCVV: formik.values.cardCVV,
    };

    dispatch(paymentsAdd({ postData }));
  };
  console.log(data);

  return (
    <div className={styles.cart} data-test-id='cart'>
      <div className={styles.cartHeader}>
        <span className={styles.title}>Shopping Cart</span>
        <div aria-hidden onClick={closeCart} className={styles.crossButton}>
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.cartNav}>
        <span
          aria-hidden
          className={classNames(styles.navItem, { [styles.itemActive]: isProductsActive })}
          onClick={cartProductsOnClick}
        >
          Item in Cart
        </span>
        /
        <span
          aria-hidden
          className={classNames(styles.navItem, { [styles.itemActive]: isDelyveryActive })}
          onClick={cartDelyveryOnClick}
        >
          Delivery Info
        </span>
        /
        <span
          aria-hidden
          className={classNames(styles.navItem, { [styles.itemActive]: isPaymentActive })}
          onClick={cartPaymentOnClick}
        >
          Payment
        </span>
      </div>
      <div className={styles.cartMain}>
        {isProductsActive && <CartProducts cart={cartArrProducts?.cart} handleSelect={handleSelect} formik={formik} />}
        {isDelyveryActive && <CartDelivery cart={cartArrProducts?.cart} handleSelect={handleSelect} formik={formik} />}
        {isPaymentActive && (
          <CartPayment
            cart={cartArrProducts?.cart}
            handleSelect={handleSelect}
            formik={formik}
            paymentType={paymentType}
            setPaymentType={setPaymentType}
          />
        )}
      </div>
      {cartArrProducts.cart.length ? (
        <div className={styles.cardFooter}>
          <div className={styles.totalPrice}>
            <span className={styles.totalText}>Total</span>
            <span className={styles.totalPrice}>$ {summFromArr.toFixed(2)}</span>
          </div>
          {isPaymentActive ? (
            <button
              type='submit'
              className={classNames(styles.further, styles.button)}
              onClick={() => {
                handleSelect();
              }}
            >
              Check Out
            </button>
          ) : (
            <button
              type='submit'
              className={classNames(styles.further, styles.button)}
              onClick={() => {
                handleClick();
                // handleSelect();
              }}
            >
              Further
            </button>
          )}
          <button type='button' className={classNames(styles.viewCart, styles.button)} onClick={cartProductsOnClick}>
            View Cart
          </button>
        </div>
      ) : (
        <div className={styles.cardFooter}>
          <button type='button' className={classNames(styles.further, styles.button)} onClick={closeCart}>
            Back to shopping
          </button>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  closeCart: PropTypes.func.isRequired,
};
