/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';

import styles from './paypal.module.scss';

export const Paypal = ({ formik }) => (
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
  </form>
);
