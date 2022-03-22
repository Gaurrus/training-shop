/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form, Formik, Field } from 'formik';

import styles from './mastercard.module.scss';

export const Mastercard = () => (
  <Formik>
    <Form className={styles.dataItem}>
      <label htmlFor='mastercard' className={styles.dataLabel}>
        CARD
      </label>
      <Field type='text' name='card' id='mastercard' className={styles.input} placeholder='----------------' />
      <div className={styles.dubleInput}>
        <Field type='text' name='year-month' id='year-month' className={styles.input} placeholder='YY/MM' />
        <Field type='text' name='cvv' id='cvv' className={styles.input} placeholder='CVV' />
      </div>
    </Form>
  </Formik>
);
