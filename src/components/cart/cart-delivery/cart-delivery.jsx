/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

import { PostForm } from './post-form/post-form';
import { ExpressForm } from './express-form/express-form';
import { SelfForm } from './self-form/self-form';

import styles from './cart-delivery.module.scss';

export const CartDelivery = ({ cart, handleSelect, formik, radioDeliveryMethod, setRadioDeliveryMethod }) => {
  const handleChange = (values) => {
    const typeOfDelyvery = values;
    handleSelect(typeOfDelyvery);
  };

  return (
    <div className={styles.wrapper}>
      {cart.length ? (
        <form>
          <Formik
            initialValues={{ delyveryType: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
            }}
          >
            {({ values }) => (
              <Form
                onChange={() => {
                  handleChange(values);
                }}
              >
                <h2 className={styles.delyveryTitle}>Choose the method of delivery of the items</h2>
                <div className={styles.radioGroup}>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='post' className={styles.label}>
                    <Field
                      type='radio'
                      id='post'
                      name='delyveryType'
                      value='pickup from post offices'
                      className={styles.castomRadio}
                    />
                    Pickup from post offices
                  </label>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='express' className={styles.label}>
                    <Field
                      type='radio'
                      id='express'
                      name='delyveryType'
                      value='express delivery'
                      className={styles.castomRadio}
                    />
                    Express delivery
                  </label>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='self' className={styles.label}>
                    <Field
                      type='radio'
                      id='self'
                      name='delyveryType'
                      value='store pickup'
                      className={styles.castomRadio}
                    />
                    Store pickup
                  </label>
                  <div className={styles.horisontalLine} />
                </div>
                {setRadioDeliveryMethod(values.delyveryType)}
              </Form>
            )}
          </Formik>
          <form>
            {radioDeliveryMethod === 'pickup from post offices' && <PostForm formik={formik} />}
            {radioDeliveryMethod === 'express delivery' && <ExpressForm formik={formik} />}
            {radioDeliveryMethod === 'store pickup' && <SelfForm formik={formik} />}
          </form>
        </form>
      ) : (
        <span className={styles.emptyCart}>Sorry, your cart is empty</span>
      )}
    </div>
  );
};
