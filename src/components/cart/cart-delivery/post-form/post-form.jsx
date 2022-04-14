/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import { useEffect } from 'react';
import InputMask from 'react-input-mask';

import styles from './post-form.module.scss';

export const PostForm = ({ formik, formError }) => {
  useEffect(() => {
    formik.resetForm(formik.initialValues);
  }, []);
  return (
    <form onChange={formik.handleChange} id='postForm'>
      {/* <button type='submit'>Submit</button> */}
      <div className={styles.postDeliveryData}>
        <div className={styles.dataItem}>
          <label htmlFor='phone' className={styles.dataLabel}>
            PHONE
          </label>
          <InputMask
            mask='+375(99)9999999'
            type='text'
            name='phone'
            id='phone'
            className={classNames(styles.input, { [styles.error]: formik.errors.phone })}
            value={formik.values.phone}
            required='true'
          />
          {formik.errors.phone && <span className={styles.errorMessage}>{formik.errors.phone}</span>}
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
            required='true'
          />
          {formik.errors.email && <span className={styles.errorMessage}>{formik.errors.email}</span>}
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
          {formik.errors.country && <span className={styles.errorMessage}>{formik.errors.country}</span>}
          <input
            type='text'
            name='city'
            id='adress'
            className={classNames(styles.input, { [styles.error]: formik.errors.city })}
            placeholder='City'
            values={formik.values.city}
          />
          {formik.errors.city && <span className={styles.errorMessage}>{formik.errors.city}</span>}
          <input
            type='text'
            name='street'
            id='adress'
            className={classNames(styles.input, { [styles.error]: formik.errors.street })}
            placeholder='Street'
            values={formik.values.street}
          />
          {formik.errors.street && <span className={styles.errorMessage}>{formik.errors.street}</span>}
          <div className={styles.dubleInput}>
            <div>
              <input
                type='text'
                name='house'
                id='adress'
                className={classNames(styles.input, { [styles.error]: formik.errors.house })}
                placeholder='House'
                values={formik.values.house}
              />
              {formik.errors.house && <span className={styles.errorMessage}>{formik.errors.house}</span>}
            </div>
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
          <InputMask
            mask='BY 999999'
            type='text'
            name='postcode'
            id='postcode'
            className={classNames(styles.input, { [styles.error]: formik.errors.postcode })}
            values={formik.values.postcode}
          />
          {formik.errors.postcode && <span className={styles.errorMessage}>{formik.errors.postcode}</span>}
        </div>
        <label htmlFor='agreenment' className={styles.checkboxLabel}>
          <input
            type='checkbox'
            id='agreenment'
            name='agreenment'
            className={classNames(styles.castomCheckbox, { [styles.error]: formik.errors.agreenment })}
            value={formError ? formik?.initialValues?.agreenment : formik?.values?.agreenment}
          />
          I agree to the processing of my personal information
        </label>
        {formik.errors.agreenment && <span className={styles.errorMessage}>{formik.errors.agreenment}</span>}
      </div>
    </form>
  );
};
