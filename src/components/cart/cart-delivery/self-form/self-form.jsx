/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountriesRequest } from '../../../store/countries-state';
import { countriesSelector } from '../../../../selectors';

import styles from './self-form.module.scss';

export const SelfForm = ({ formik }) => {
  const dispatch = useDispatch();

  const { data } = useSelector(countriesSelector);
  useEffect(() => {
    dispatch(getCountriesRequest());
  }, []);
  return (
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
            ADRESS OF STORE
          </label>
          <select
            name='country'
            id='adress'
            className={styles.input}
            placeholder='Country'
            value={formik.values.country}
          >
            {data?.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
          <select
            name='storeAddress'
            id='store'
            className={styles.input}
            placeholder='Store adress'
            value={formik.values.storeAddress}
          >
            <option value='minsk'>Minsk</option>
            <option value='orsha'>Orsha</option>
            <option value='tolochin'>Tolochin</option>
          </select>
        </div>
        <label htmlFor='agreenment' className={styles.checkboxLabel}>
          <input type='checkbox' id='agreenment' name='agreenment' className={styles.castomCheckbox} />I agree to the
          processing of my personal information
        </label>
      </div>
    </form>
  );
};
