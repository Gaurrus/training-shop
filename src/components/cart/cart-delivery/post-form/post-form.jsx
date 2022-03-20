/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';
import styles from './post-form.module.scss';

export const PostForm = () => (
  <Formik
    initialValues={{
      phone: '',
      email: '',
      country: '',
      city: '',
      street: '',
      house: '',
      apartment: '',
      postcode: '',
      agreenment: false,
    }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
    }}
  >
    <Form>
      <div className={styles.postDeliveryData}>
        <div className={styles.dataItem}>
          <label htmlFor='phone' className={styles.dataLabel}>
            PHONE
          </label>
          <Field type='text' name='phone' id='phone' className={styles.input} placeholder='+375  (__) _______' />
        </div>
        <div className={styles.dataItem}>
          <label htmlFor='email' className={styles.dataLabel}>
            e-mail
          </label>
          <Field type='email' name='email' id='email' className={styles.input} placeholder='e-mail' />
        </div>
        <div className={styles.dataItem}>
          <label htmlFor='adress' className={styles.dataLabel}>
            ADRESS
          </label>
          <Field type='text' name='country' id='adress' className={styles.input} placeholder='Country' />
          <Field type='text' name='city' id='adress' className={styles.input} placeholder='City' />
          <Field type='text' name='street' id='adress' className={styles.input} placeholder='Street' />
          <div className={styles.dubleInput}>
            <Field type='text' name='house' id='adress' className={styles.input} placeholder='House' />
            <Field type='text' name='apartment' id='adress' className={styles.input} placeholder='Apartment' />
          </div>
        </div>
        <div className={styles.dataItem}>
          <label htmlFor='postcode' className={styles.dataLabel}>
            POSTcode
          </label>
          <Field type='text' name='postcode' id='postcode' className={styles.input} placeholder='BY ______' />
        </div>
        <label htmlFor='agreenment' className={styles.checkboxLabel}>
          <Field type='checkbox' id='agreenment' name='agreenment' className={styles.castomCheckbox} />I agree to the
          processing of my personal information
        </label>
      </div>
    </Form>
  </Formik>
);
