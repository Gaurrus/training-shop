/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import { CartProducts } from './cart-products';
import { CartDelivery } from './cart-delivery/cart-delivery';
import { CartPayment } from './cart-payment';
import { SuccessPayment } from './success-payment';
import { ErrorPayment } from './error-payment';

import { cartSelector, paymentsSelector } from '../../selectors';
import { paymentsAdd, paymentsReset, postPaymentsRequest } from '../store/payments-state';

import styles from './cart.module.scss';

export const Cart = ({ closeCart, formik, reset }) => {
  const [isProductsActive, setIsProductsActive] = useState(false);
  const [isDelyveryActive, setIsDelyveryActive] = useState(false);
  const [isPaymentActive, setIsPaymentActive] = useState(false);
  const [formError, setFormError] = useState(false);
  const [paymentType, setPaymentType] = useState('');
  const [radioDeliveryMethod, setRadioDeliveryMethod] = useState('pickup from post offices');
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

  const { data, isPaymentsError, isPaymentsLoading } = useSelector(paymentsSelector);

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
  }, [cartArrProducts, formik]);

  const handleSelect = () => {
    const postData = {
      products: paymentArrayProducts,
      deliveryMethod: radioDeliveryMethod,
      paymentMethod: paymentType === 'visa' || paymentType === 'mastercard' ? 'card' : paymentType,
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
      agree: formik.values.agreenment,
    };

    dispatch(paymentsAdd({ postData }));
    if (radioDeliveryMethod !== '' && paymentType !== '' && isPaymentActive)
      dispatch(postPaymentsRequest({ postData }));
  };

  return (
    <form className={styles.cart} data-test-id='cart' onChange={formik.handleChange} onBlur={formik.handleBlur}>
      {!isPaymentsError && !isPaymentsLoading && (
        <SuccessPayment closeCart={closeCart} reset={reset} formik={formik} initialValues={formik.initialValues} />
      )}
      {isPaymentsError && !isPaymentsLoading && (
        <ErrorPayment
          closeCart={closeCart}
          cartProductsOnClick={cartProductsOnClick}
          reset={reset}
          formik={formik}
          initialValues={formik.initialValues}
          cartPaymentOnClick={cartPaymentOnClick}
        />
      )}
      {!isPaymentsError && isPaymentsLoading && (
        <>
          <div className={styles.cartHeader}>
            <span className={styles.title}>Shopping Cart</span>
            <div aria-hidden onClick={closeCart} className={styles.crossButton}>
              <div className={styles.line} />
              <div className={styles.line} />
            </div>
          </div>
          <div className={styles.cartNav}>
            <span aria-hidden className={classNames(styles.navItem, { [styles.itemActive]: isProductsActive })}>
              Item in Cart
            </span>
            /
            <span aria-hidden className={classNames(styles.navItem, { [styles.itemActive]: isDelyveryActive })}>
              Delivery Info
            </span>
            /
            <span aria-hidden className={classNames(styles.navItem, { [styles.itemActive]: isPaymentActive })}>
              Payment
            </span>
          </div>
          <div className={styles.cartMain}>
            {isProductsActive && (
              <CartProducts cart={cartArrProducts?.cart} handleSelect={handleSelect} formik={formik} />
            )}
            {isDelyveryActive && (
              <CartDelivery
                cart={cartArrProducts?.cart}
                handleSelect={handleSelect}
                formik={formik}
                radioDeliveryMethod={radioDeliveryMethod}
                setRadioDeliveryMethod={setRadioDeliveryMethod}
                formError={formError}
              />
            )}
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
              {isProductsActive && (
                <button
                  type='submit'
                  className={classNames(styles.further, styles.button)}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Further
                </button>
              )}
              {isDelyveryActive && radioDeliveryMethod === 'pickup from post offices' && (
                <button
                  type='button'
                  form='post'
                  className={classNames(styles.further, styles.button)}
                  onClick={() => {
                    formik.touched.phone = true;
                    formik.touched.email = true;
                    formik.touched.country = true;
                    formik.touched.city = true;
                    formik.touched.street = true;
                    formik.touched.house = true;
                    formik.touched.postcode = true;
                    formik.validateForm();
                    if (
                      formik.errors.phone ||
                      formik.errors.email ||
                      formik.errors.country ||
                      formik.errors.city ||
                      formik.errors.street ||
                      formik.errors.house ||
                      formik.errors.postcode
                    ) {
                      formik.setFieldValue('agreenment', false);
                    }
                    if (
                      !formik.errors.phone &&
                      !formik.errors.email &&
                      !formik.errors.country &&
                      !formik.errors.city &&
                      !formik.errors.street &&
                      !formik.errors.house &&
                      !formik.errors.postcode &&
                      !formik.errors.agreenment &&
                      formik.values.agreenment === true &&
                      formik.values.phone !== '' &&
                      formik.values.email !== '' &&
                      formik.values.country !== '' &&
                      formik.values.city !== '' &&
                      formik.values.street !== '' &&
                      formik.values.postcode !== ''
                    ) {
                      handleClick();
                    }
                    handleSelect();
                  }}
                >
                  Further
                </button>
              )}
              {isDelyveryActive && radioDeliveryMethod === 'express delivery' && (
                <button
                  type='button'
                  className={classNames(styles.further, styles.button)}
                  onClick={() => {
                    formik.touched.phone = true;
                    formik.touched.email = true;
                    formik.touched.country = true;
                    formik.touched.city = true;
                    formik.touched.street = true;
                    formik.touched.house = true;
                    formik.touched.agreenment = true;
                    formik.validateForm();
                    if (
                      formik.errors.phone ||
                      formik.errors.email ||
                      formik.errors.country ||
                      formik.errors.city ||
                      formik.errors.street ||
                      formik.errors.house
                    ) {
                      formik.setFieldValue('agreenment', false);
                    }
                    if (
                      !formik.errors.phone &&
                      !formik.errors.email &&
                      !formik.errors.country &&
                      !formik.errors.city &&
                      !formik.errors.street &&
                      !formik.errors.house &&
                      !formik.errors.agreenment &&
                      formik.values.agreenment === true &&
                      formik.values.phone !== '' &&
                      formik.values.email !== '' &&
                      formik.values.country !== '' &&
                      formik.values.city !== '' &&
                      formik.values.street !== '' &&
                      formik.values.house !== ''
                    ) {
                      handleClick();
                    }
                    handleSelect();
                  }}
                >
                  Further
                </button>
              )}
              {isDelyveryActive && radioDeliveryMethod === 'store pickup' && (
                <button
                  type='button'
                  className={classNames(styles.further, styles.button)}
                  onClick={() => {
                    formik.touched.phone = true;
                    formik.touched.email = true;
                    formik.touched.country = true;
                    formik.touched.storeAddress = true;
                    formik.touched.agreenment = true;
                    formik.validateForm();
                    if (
                      formik.errors.phone ||
                      formik.errors.email ||
                      formik.errors.country ||
                      formik.errors.storeAddress
                    ) {
                      formik.setFieldValue('agreenment', false);
                    }
                    if (
                      !formik.errors.phone &&
                      !formik.errors.email &&
                      !formik.errors.country &&
                      !formik.errors.storeAddress &&
                      !formik.errors.agreenment &&
                      formik.values.agreenment === true &&
                      formik.values.phone !== '' &&
                      formik.values.email !== '' &&
                      formik.values.country !== '' &&
                      formik.values.storeAddress !== ''
                    ) {
                      handleClick();
                    }
                    handleSelect();
                  }}
                >
                  Further
                </button>
              )}
              {isPaymentActive && paymentType === 'paypal' && (
                <button
                  type='button'
                  className={classNames(styles.further, styles.button)}
                  onClick={() => {
                    formik.touched.cashEmail = true;
                    formik.validateForm();
                    if (!formik.errors.cashEmail && formik.values.cashEmail !== '') {
                      handleSelect();
                    }
                  }}
                >
                  Check Out
                </button>
              )}
              {isPaymentActive && (paymentType === 'visa' || paymentType === 'mastercard') && (
                <button
                  type='button'
                  className={classNames(styles.further, styles.button)}
                  onClick={() => {
                    formik.touched.card = true;
                    formik.touched.cardDate = true;
                    formik.touched.cardCVV = true;
                    formik.validateForm();
                    if (
                      !formik.errors.card &&
                      !formik.errors.cardDate &&
                      !formik.errors.cardCVV &&
                      formik.values.card !== '' &&
                      formik.values.cardDate !== '' &&
                      formik.values.cardCVV !== ''
                    ) {
                      handleSelect();
                    }
                  }}
                >
                  Check Out
                </button>
              )}
              {isPaymentActive && paymentType === 'cash' && (
                <button
                  type='button'
                  className={classNames(styles.further, styles.button)}
                  onClick={() => {
                    handleSelect();
                  }}
                >
                  Ready
                </button>
              )}

              {isDelyveryActive && (
                <button
                  type='button'
                  className={classNames(styles.viewCart, styles.button)}
                  onClick={() => {
                    formik.touched.phone = false;
                    formik.touched.email = false;
                    formik.touched.cashEmail = false;
                    formik.touched.country = false;
                    formik.touched.city = false;
                    formik.touched.street = false;
                    formik.touched.house = false;
                    formik.touched.apartment = false;
                    formik.touched.postcode = false;
                    formik.touched.storeAddress = false;
                    formik.touched.agreenment = false;
                    formik.touched.paymentType = false;
                    formik.touched.card = false;
                    formik.touched.cardDate = false;
                    formik.touched.cardCVV = false;
                    cartProductsOnClick();
                    formik.setFieldValue('agreenment', false);
                  }}
                >
                  View Cart
                </button>
              )}
              {isPaymentActive && (
                <button
                  type='button'
                  className={classNames(styles.viewCart, styles.button)}
                  onClick={() => {
                    formik.touched.cashEmail = false;
                    formik.touched.card = false;
                    formik.touched.cardDate = false;
                    formik.touched.cardCVV = false;
                    cartDelyveryOnClick();
                  }}
                >
                  View Cart
                </button>
              )}
            </div>
          ) : (
            <div className={styles.cardFooter}>
              <button type='button' className={classNames(styles.further, styles.button)} onClick={closeCart}>
                Back to shopping
              </button>
            </div>
          )}
        </>
      )}
    </form>
  );
};

Cart.propTypes = {
  closeCart: PropTypes.func.isRequired,
};
