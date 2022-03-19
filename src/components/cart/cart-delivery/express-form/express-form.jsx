/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';
import styles from './express-form.module.scss';

export const ExpressForm = () => (
  <Formik
    initialValues={{ phone: '' }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
    }}
  >
    <Form>
      <div className={styles.postDeliveryData}>Express</div>
    </Form>
  </Formik>
);
