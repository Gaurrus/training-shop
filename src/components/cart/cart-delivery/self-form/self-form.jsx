/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState, useRef } from 'react';
import ReactInputMask from 'react-input-mask';
import { IMaskInput } from 'react-imask';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { getCountriesRequest } from '../../../store/countries-state';
import { countriesSelector } from '../../../../selectors';

import styles from './self-form.module.scss';

export const SelfForm = ({ formik, formError }) => {
  const dispatch = useDispatch();

  const { data } = useSelector(countriesSelector);
  useEffect(() => {
    formik.resetForm(formik.initialValues);
    dispatch(getCountriesRequest());
  }, []);
  return (
    <form onChange={formik.handleChange}>
      <div className={styles.postDeliveryData}>
        <div className={styles.dataItem}>
          <label htmlFor='phone' className={styles.dataLabel}>
            PHONE
          </label>
          <ReactInputMask
            mask='+375(99)9999999'
            type='text'
            name='phone'
            id='phone'
            className={classNames(styles.input, { [styles.error]: formik.errors.phone })}
            value={formik.values.phone}
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
            value={formik.values.email}
          />
          {formik.errors.email && <span className={styles.errorMessage}>{formik.errors.email}</span>}
        </div>
        <div className={styles.dataItem}>
          <label htmlFor='adress' className={styles.dataLabel}>
            ADRESS OF STORE
          </label>
          <select
            name='country'
            id='adress'
            className={classNames(styles.input, { [styles.error]: formik.errors.country })}
            placeholder='Country'
            value={formik.values.country}
          >
            {data?.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
          {formik.errors.country && <span className={styles.errorMessage}>{formik.errors.country}</span>}
          <select
            name='storeAddress'
            id='store'
            className={classNames(styles.input, { [styles.error]: formik.errors.storeAddress })}
            placeholder='Store adress'
            value={formik.values.storeAddress}
            disabled={data?.length === 0}
          >
            <option value='minsk'>Minsk</option>
            <option value='orsha'>Orsha</option>
            <option value='tolochin'>Tolochin</option>
          </select>
          {formik.errors.storeAddress && <span className={styles.errorMessage}>{formik.errors.storeAddress}</span>}
        </div>
        <label htmlFor='agreenment' className={styles.checkboxLabel}>
          <input
            type='checkbox'
            id='agreenment'
            name='agreenment'
            value={formError ? formik?.initialValues?.agreenment : formik?.values?.agreenment}
            className={classNames(styles.castomCheckbox, { [styles.error]: formik.errors.agreenment })}
          />
          I agree to the processing of my personal information
        </label>
        {formik.errors.agreenment && <span className={styles.errorMessage}>{formik.errors.agreenment}</span>}
      </div>
    </form>
  );
};
