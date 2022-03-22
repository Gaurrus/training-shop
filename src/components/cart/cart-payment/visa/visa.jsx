/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';

import styles from './visa.module.scss';

export const Visa = () => (
  <Formik>
    <Form className={styles.dataItem}>
      <label htmlFor='visa' className={styles.dataLabel}>
        CARD
      </label>
      <Field type='text' name='card' id='visa' className={styles.input} placeholder='----------------' />
      <div className={styles.dubleInput}>
        <Field type='text' name='year-month' id='year-month' className={styles.input} placeholder='YY/MM' />
        <Field type='text' name='cvv' id='cvv' className={styles.input} placeholder='CVV' />
      </div>
    </Form>
  </Formik>
);
