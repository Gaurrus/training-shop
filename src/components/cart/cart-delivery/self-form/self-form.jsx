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
            ADRESS OF STORE
          </label>
          <Field type='text' name='country' id='adress' className={styles.input} placeholder='Country' />
          <Field
            as='select'
            type='text'
            name='store-adress'
            id='store'
            className={styles.input}
            placeholder='Store adress'
          >
            <option value='minsk'>Minsk</option>
            <option value='orsha'>Orsha</option>
            <option value='tolochin'>Tolochin</option>
          </Field>
        </div>
        <label htmlFor='agreenment' className={styles.checkboxLabel}>
          <Field type='checkbox' id='agreenment' name='agreenment' className={styles.castomCheckbox} />I agree to the
          processing of my personal information
        </label>
      </div>
    </Form>
  </Formik>
);
