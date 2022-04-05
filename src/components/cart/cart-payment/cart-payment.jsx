/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';

import classNames from 'classnames';

import visa from './assets/visa.svg';
import mastercard from './assets/mastercard.svg';
import paypal from './assets/paypal.svg';

import { Paypal } from './paypal/paypal';
import { Mastercard } from './mastercard';
import { Cash } from './cash/cash';
import { Visa } from './visa/visa';

import styles from './cart-payment.module.scss';

export const CartPayment = ({ cart, formik }) => {
  const [radioPay, setRadioPay] = useState('');
  return (
    <div className={styles.wrapper}>
      {cart.length ? (
        <form>
          <Formik
            initialValues={{ paymentType: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
            }}
          >
            {({ values }) => (
              <Form>
                <h2 className={styles.delyveryTitle}>Method of payments</h2>
                <div className={styles.radioGroup}>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='paypal' className={styles.label}>
                    <Field type='radio' id='paypal' name='paymentType' value='paypal' className={styles.castomRadio} />
                    <img src={paypal} alt='paypal-ico' />
                  </label>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='visa' className={styles.label}>
                    <Field type='radio' id='visa' name='paymentType' value='visa' className={styles.castomRadio} />
                    <img src={visa} alt='visa-ico' />
                  </label>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='mastercard' className={styles.label}>
                    <Field
                      type='radio'
                      id='mastercard'
                      name='paymentType'
                      value='mastercard'
                      className={styles.castomRadio}
                    />
                    <img src={mastercard} alt='mastercard-ico' />
                  </label>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='cash' className={styles.label}>
                    <Field type='radio' id='cash' name='paymentType' value='cash' className={styles.castomRadio} />
                    Cash
                  </label>
                </div>
                {setRadioPay(values.paymentType)}
              </Form>
            )}
          </Formik>
          <form>
            {radioPay === 'paypal' && <Paypal />}
            {radioPay === 'visa' && <Visa />}
            {radioPay === 'mastercard' && <Mastercard />}
            {radioPay === 'cash' && <Cash />}
          </form>
        </form>
      ) : (
        <span className={styles.emptyCart}>Sorry, your cart is empty</span>
      )}
    </div>
  );
};
