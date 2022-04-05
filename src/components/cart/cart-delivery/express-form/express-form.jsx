/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Form, Formik } from 'formik';
import styles from './express-form.module.scss';

export const ExpressForm = ({ formik }) => (
  <form onChange={formik.handleChange}>
    <div className={styles.postDeliveryData}>
      <div className={styles.dataItem}>
        <label htmlFor='phone' className={styles.dataLabel}>
          PHONE
        </label>
        <input
          type='text'
          name='phone'
          id='phone'
          className={styles.input}
          placeholder='+375  (__) _______'
          value={formik.values.phone}
        />
      </div>
      <div className={styles.dataItem}>
        <label htmlFor='email' className={styles.dataLabel}>
          e-mail
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className={styles.input}
          placeholder='e-mail'
          value={formik.values.email}
        />
      </div>
      <div className={styles.dataItem}>
        <label htmlFor='adress' className={styles.dataLabel}>
          ADRESS
        </label>
        <input
          type='text'
          name='country'
          id='adress'
          className={styles.input}
          placeholder='Country'
          value={formik.values.country}
        />
        <input
          type='text'
          name='city'
          id='adress'
          className={styles.input}
          placeholder='City'
          value={formik.values.city}
        />
        <input
          type='text'
          name='street'
          id='adress'
          className={styles.input}
          placeholder='Street'
          value={formik.values.street}
        />
        <div className={styles.dubleInput}>
          <input
            type='text'
            name='house'
            id='adress'
            className={styles.input}
            placeholder='House'
            value={formik.values.house}
          />
          <input
            type='text'
            name='apartment'
            id='adress'
            className={styles.input}
            placeholder='Apartment'
            value={formik.values.apartment}
          />
        </div>
      </div>
      <label htmlFor='agreenment' className={styles.checkboxLabel}>
        <input
          type='checkbox'
          id='agreenment'
          name='agreenment'
          className={styles.castomCheckbox}
          value={formik.values.agreenment}
        />
        I agree to the processing of my personal information
      </label>
    </div>
  </form>
);
