/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { getCountriesRequest } from '../../../store/countries-state';
import { countriesSelector, searchStoreSelector } from '../../../../selectors';
import { searchStorePostRequest } from '../../../store/search-store-post-state';

import styles from './self-form.module.scss';

export const SelfForm = ({ formik, handleSelect }) => {
  const dispatch = useDispatch();
  const [clickedStore, setClickedStore] = useState('');

  const { isLoading, isError } = useSelector(searchStoreSelector);

  const { data: countries } = useSelector(countriesSelector);
  useEffect(() => {
    dispatch(getCountriesRequest());
    formik.setFieldValue('country', countries[0]?.name);
  }, []);

  useEffect(() => {
    const postData = {
      city: formik.values.storeAddress,
      country: formik.values.country,
    };
    if (formik.values.storeAddress.length >= 3) {
      dispatch(searchStorePostRequest({ postData }));
    }
  }, [formik.values]);

  const { response } = useSelector(searchStoreSelector);
  return (
    <div>
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
          {isError && !isLoading && <span className={styles.errorMessage}>Connection error</span>}
          <select
            name='country'
            id='adress'
            className={classNames(styles.input, { [styles.error]: formik.errors.country })}
            placeholder='Country'
            value={formik.values.country}
          >
            {countries?.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
          {formik.errors.country && <span className={styles.errorMessage}>{formik.errors.country}</span>}
          <input
            className={classNames(styles.input, { [styles.error]: formik.errors.storeAddress })}
            type='text'
            name='storeAddress'
            value={formik.values.storeAddress}
            disabled={countries?.length === 0}
          />
          {response.length > 0 && formik.values.storeAddress !== clickedStore && (
            <ul className={styles.list}>
              {response?.map((item) => (
                <li
                  aria-hidden
                  className={styles.option}
                  key={item.city}
                  onClick={() => {
                    setClickedStore(item.city);
                    formik.setFieldValue('storeAddress', item.city);
                  }}
                >
                  {item.city}
                </li>
              ))}
            </ul>
          )}
          {response.length === 0 && formik.values.storeAddress !== '' && (
            <span className={styles.errorMessage}>Sity is not found</span>
          )}
          {formik.errors.storeAddress && <span className={styles.errorMessage}>{formik.errors.storeAddress}</span>}
        </div>
        <label htmlFor='agreenment' className={styles.checkboxLabel}>
          <input
            type='checkbox'
            id='agreenment'
            name='agreenment'
            value={formik?.values?.agreenment}
            checked={formik?.values?.agreenment}
            onChange={() => {
              handleSelect();
            }}
            className={classNames(styles.castomCheckbox, { [styles.error]: formik.errors.agreenment })}
          />
          I agree to the processing of my personal information
        </label>
        {formik.errors.agreenment && <span className={styles.errorMessage}>{formik.errors.agreenment}</span>}
      </div>
    </div>
  );
};
