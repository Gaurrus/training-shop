/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

import { PostForm } from './post-form/post-form';
import { ExpressForm } from './express-form/express-form';
import { SelfForm } from './self-form/self-form';

import styles from './cart-delivery.module.scss';

export const CartDelivery = ({ cart }) => {
  const [radio, setRadio] = useState('post');

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
              <Form>
                <h2 className={styles.delyveryTitle}>Choose the method of delivery of the items</h2>
                <div className={styles.radioGroup}>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='post' className={styles.label}>
                    <Field type='radio' id='post' name='delyveryType' value='post' className={styles.castomRadio} />
                    Pickup from post offices
                  </label>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='express' className={styles.label}>
                    <Field
                      type='radio'
                      id='express'
                      name='delyveryType'
                      value='express'
                      className={styles.castomRadio}
                    />
                    Express delivery
                  </label>
                  <div className={styles.horisontalLine} />
                  <label htmlFor='self' className={styles.label}>
                    <Field type='radio' id='self' name='delyveryType' value='self' className={styles.castomRadio} />
                    Store pickup
                  </label>
                  <div className={styles.horisontalLine} />
                </div>
                {setRadio(values.delyveryType)}
              </Form>
            )}
          </Formik>
          <form>
            {radio === 'post' && <PostForm />}
            {radio === 'express' && <ExpressForm />}
            {radio === 'self' && <SelfForm />}
          </form>
        </form>
      ) : (
        <span className={styles.emptyCart}>Sorry, your cart is empty</span>
      )}
    </div>
  );
};
