/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';
import styles from './cart-delivery.module.scss';

export const CartDelivery = () => (
  <div className={styles.wrapper}>
    <Formik
      initialValues={{ delyveryType: '', phone: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
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
            <Field type='radio' id='express' name='delyveryType' value='express' className={styles.castomRadio} />
            Express delivery
          </label>
          <div className={styles.horisontalLine} />
          <label htmlFor='self' className={styles.label}>
            <Field type='radio' id='self' name='delyveryType' value='self' className={styles.castomRadio} />
            Store pickup
          </label>
          <div className={styles.horisontalLine} />
        </div>
        <div className={styles.postDeliveryData}>
          <div className={styles.dataItem}>
            <label htmlFor='phone' className={styles.dataLabel}>
              PHONE
            </label>
            <Field type='text' name='phone' id='phone' className={styles.input} />
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
  </div>
);
