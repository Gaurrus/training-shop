/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';

import classNames from 'classnames';

import styles from './paypal.module.scss';

export const Paypal = ({ formik }) => {
  useEffect(() => {
    // formik.setFieldValue('cashEmail', '');
    formik.setFieldError('cashEmail', false);
  }, []);
  return (
    <form className={styles.dataItem} onChange={formik.handleChange}>
      <label htmlFor='paypal' className={styles.dataLabel}>
        E-MAIL
      </label>
      <input
        type='text'
        name='cashEmail'
        id='paypal'
        className={classNames(styles.input, { [styles.error]: formik.errors.cashEmail })}
        placeholder='e-mail'
        value={formik.values.cashEmail}
      />
      {formik.errors.cashEmail && <span className={styles.errorMessage}>{formik.errors.cashEmail}</span>}
    </form>
  );
};
