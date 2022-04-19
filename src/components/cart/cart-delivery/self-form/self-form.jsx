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
  const [clickedCountry, setClickedCountry] = useState('');
  const [isCountryListActive, setIsCountryListActive] = useState(false);

  const { isLoading, isError } = useSelector(searchStoreSelector);

  const { data: countries } = useSelector(countriesSelector);
  useEffect(() => {
    dispatch(getCountriesRequest());
    // formik.setFieldValue('country', '');
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
            className={classNames(styles.input, { [styles.error]: formik.errors.phone && formik.touched.phone })}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone && (
            <span className={styles.errorMessage}>{formik.errors.phone}</span>
          )}
        </div>
        <div className={styles.dataItem}>
          <label htmlFor='email' className={styles.dataLabel}>
            e-mail
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className={classNames(styles.input, { [styles.error]: formik.errors.email && formik.touched.email })}
            placeholder='e-mail'
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <span className={styles.errorMessage}>{formik.errors.email}</span>
          )}
        </div>
        <div className={styles.dataItem}>
          <label htmlFor='adress' className={styles.dataLabel}>
            ADRESS OF STORE
          </label>
          {isError && !isLoading && <span className={styles.errorMessage}>Ошибка связи</span>}
          <div>
            <input
              type='submit'
              name='country'
              id='country'
              className={classNames(styles.input, { [styles.error]: formik.errors.country && formik.touched.country })}
              placeholder='Country'
              value={formik.values.country}
              onClick={(e) => {
                e.preventDefault();
                setIsCountryListActive(!isCountryListActive);
              }}
              autoComplete='off'
            />
            {countries.length > 0 && isCountryListActive && (
              <ul className={classNames(styles.list, styles.country)}>
                {countries?.map((item) => (
                  <li
                    aria-hidden
                    className={classNames(styles.option, styles.country)}
                    key={item.name}
                    onClick={() => {
                      setIsCountryListActive(false);
                      setClickedCountry(item.name);
                      formik.setFieldValue('country', item.name);
                    }}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* <select
            name='country'
            id='adress'
            className={classNames(styles.input, { [styles.error]: formik.errors.country && formik.touched.country })}
            // placeholder='Country'
            value={formik.values.country}
          >
            <option value='Выберите страну' disabled>
              Выберите страну
            </option>
            {countries?.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select> */}
          {formik.errors.country && formik.touched.country && (
            <span className={styles.errorMessage}>{formik.errors.country}</span>
          )}
          <input
            className={classNames(styles.input, {
              [styles.error]: formik.errors.storeAddress && formik.touched.storeAddress,
            })}
            type='text'
            name='storeAddress'
            value={formik.values.storeAddress}
            disabled={
              countries?.length === 0 ||
              formik.values.country === '' ||
              !countries?.find((item) => item.name === formik.values.country)
            }
            autoComplete='off'
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
            <span className={styles.errorMessage}>Город не найден</span>
          )}
          {formik.errors.storeAddress && formik.touched.storeAddress && (
            <span className={styles.errorMessage}>{formik.errors.storeAddress}</span>
          )}
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
            className={classNames(styles.castomCheckbox, {
              [styles.error]: formik.errors.agreenment && formik.touched.agreenment,
            })}
          />
          I agree to the processing of my personal information
        </label>
        {formik.errors.agreenment && formik.touched.agreenment && (
          <span className={styles.errorMessage}>{formik.errors.agreenment}</span>
        )}
      </div>
    </div>
  );
};
