/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';
import styles from './paypal.module.scss';

export const Paypal = () => (
  <Formik>
    <Form className={styles.dataItem}>
      <label htmlFor='paypal' className={styles.dataLabel}>
        E-MAIL
      </label>
      <Field type='text' name='paypal' id='paypal' className={styles.input} placeholder='e-mail' />
    </Form>
  </Formik>
);
