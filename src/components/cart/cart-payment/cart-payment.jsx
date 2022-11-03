/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import visa from './assets/visa.svg';
import mastercard from './assets/mastercard.svg';
import paypal from './assets/paypal.svg';

import { Paypal } from './paypal/paypal';
import { Mastercard } from './mastercard';
import { Cash } from './cash/cash';
import { Visa } from './visa/visa';
import { paymentsSelector } from '../../../selectors';

import styles from './cart-payment.module.scss';

export const CartPayment = ({ cart, formik, paymentType, setPaymentType }) => {
  const { isPaymentsLoading, isPaymentsError } = useSelector(paymentsSelector);

  return (
    <div>
      <div className={styles.wrapper}>
        {cart.length ? (
          <div>
            <Formik
              initialValues={{ paymentType: 'visa' }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
              }}
            >
              {({ values }) => (
                <Form onChange={formik.handleChange}>
                  <h2 className={styles.delyveryTitle}>Method of payments</h2>
                  <div className={styles.radioGroup}>
                    <div className={styles.horisontalLine} />
                    <label htmlFor='paypal' className={styles.label}>
                      <Field
                        type='radio'
                        id='paypal'
                        name='paymentType'
                        value='paypal'
                        className={styles.castomRadio}
                      />
                      <img src={paypal} alt='paypal-ico' />
                    </label>
                    <div className={styles.horisontalLine} />
                    <label htmlFor='visaPoint' className={styles.label}>
                      <Field
                        type='radio'
                        id='visaPoint'
                        name='paymentType'
                        value='visa'
                        className={styles.castomRadio}
                      />
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
                  {setPaymentType(values.paymentType)}
                </Form>
              )}
            </Formik>

            <div>
              {paymentType === 'paypal' && <Paypal formik={formik} />}
              {paymentType === 'visa' && <Visa formik={formik} />}
              {paymentType === 'mastercard' && <Mastercard formik={formik} />}
              {paymentType === 'cash' && <Cash formik={formik} />}
            </div>
          </div>
        ) : (
          <span className={styles.emptyCart}>Sorry, your cart is empty</span>
        )}
      </div>
    </div>
  );
};
