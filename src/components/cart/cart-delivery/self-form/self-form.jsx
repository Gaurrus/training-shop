/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';
import styles from './self-form.module.scss';

export const SelfForm = () => (
  <Formik
    initialValues={{ phone: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
    }}
  >
    <Form>
      <div className={styles.postDeliveryData}>Self</div>
    </Form>
  </Formik>
);
