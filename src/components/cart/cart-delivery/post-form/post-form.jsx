/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import { useEffect } from 'react';
import { IMaskInput } from 'react-imask';

import styles from './post-form.module.scss';

export const PostForm = ({ formik }) => {
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
          <IMaskInput
            mask='+{375} (00)000-00-00'
            type='text'
            name='phone'
            id='phone'
            className={classNames(styles.input, { [styles.error]: formik.errors.phone })}
            placeholder='+375 (__) ___-__-__'
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
            className={classNames(styles.input, { [styles.error]: formik.errors.email })}
            placeholder='e-mail'
            values={formik.values.email}
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
            values={formik.values.country}
          />
          <input
            type='text'
            name='city'
            id='adress'
            className={classNames(styles.input, { [styles.error]: formik.errors.city })}
            placeholder='City'
            values={formik.values.city}
          />
          <input
            type='text'
            name='street'
            id='adress'
            className={classNames(styles.input, { [styles.error]: formik.errors.street })}
            placeholder='Street'
            values={formik.values.street}
          />
          <div className={styles.dubleInput}>
            <input
              type='text'
              name='house'
              id='adress'
              className={classNames(styles.input, { [styles.error]: formik.errors.house })}
              placeholder='House'
              values={formik.values.house}
            />
            <input
              type='text'
              name='apartment'
              id='adress'
              className={styles.input}
              placeholder='Apartment'
              values={formik.values.apartment}
            />
          </div>
        </div>
        <div className={styles.dataItem}>
          <label htmlFor='postcode' className={styles.dataLabel}>
            POSTcode
          </label>
          <IMaskInput
            mask='{BY} 000000'
            type='text'
            name='postcode'
            id='postcode'
            className={classNames(styles.input, { [styles.error]: formik.errors.postcode })}
            placeholder='BY ______'
            values={formik.values.postcode}
          />
        </div>
        <label htmlFor='agreenment' className={styles.checkboxLabel}>
          <input
            type='checkbox'
            id='agreenment'
            name='agreenment'
            className={classNames(styles.castomCheckbox, { [styles.error]: formik.errors.agreenment })}
            values={formik.values.agreenment}
          />
          I agree to the processing of my personal information
        </label>
      </div>
    </form>
  );
};
