/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form, Formik, Field } from 'formik';

import styles from './mastercard.module.scss';

export const Mastercard = ({ formik }) => (
  <form className={styles.dataItem} onChange={formik.handleChange}>
    <label htmlFor='mastercard' className={styles.dataLabel}>
      CARD
    </label>
    <input
      type='text'
      name='card'
      id='mastercard'
      className={styles.input}
      placeholder='----------------'
      value={formik.values.card}
    />
    <div className={styles.dubleInput}>
      <input
        type='text'
        name='cardDate'
        id='cardDate'
        className={styles.input}
        placeholder='YY/MM'
        value={formik.values.cardDate}
      />
      <input
        type='text'
        name='cardCVV'
        id='cardCVV'
        className={styles.input}
        placeholder='CVV'
        value={formik.values.cardCVV}
      />
    </div>
  </form>
);
