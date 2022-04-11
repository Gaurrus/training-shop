/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames';

import styles from './express-form.module.scss';

export const ExpressForm = ({ formik }) => {
  useEffect(() => {
    formik.resetForm(formik.initialValues);
  }, []);
  return (
    <form onChange={formik.handleChange}>
      <div className={styles.postDeliveryData}>
        <div className={styles.dataItem}>
          <label htmlFor='phone' className={styles.dataLabel}>
            PHONE
          </label>
          {formik.errors.phone}
          <InputMask
            mask='+375(99)9999999'
            type='text'
            name='phone'
            id='phone'
            className={classNames(styles.input, { [styles.error]: formik.errors.phone })}
            value={formik.values.phone}
            required='true'
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
            className={classNames(styles.input, { [styles.error]: formik.errors.email })}
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
            className={classNames(styles.input, { [styles.error]: formik.errors.country })}
            placeholder='Country'
            value={formik.values.country}
          />
          <input
            type='text'
            name='city'
            id='adress'
            className={classNames(styles.input, { [styles.error]: formik.errors.city })}
            placeholder='City'
            value={formik.values.city}
          />
          <input
            type='text'
            name='street'
            id='adress'
            className={classNames(styles.input, { [styles.error]: formik.errors.street })}
            placeholder='Street'
            value={formik.values.street}
          />
          <div className={styles.dubleInput}>
            <input
              type='text'
              name='house'
              id='adress'
              className={classNames(styles.input, { [styles.error]: formik.errors.house })}
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
            className={classNames(styles.castomCheckbox, { [styles.error]: formik.errors.house })}
            value={formik.values.agreenment}
          />
          I agree to the processing of my personal information
        </label>
      </div>
    </form>
  );
};
