/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';

import styles from './mastercard.module.scss';

export const Mastercard = ({ formik }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <form className={styles.dataItem} onChange={formik.handleChange}>
      <label htmlFor='mastercard' className={styles.dataLabel}>
        CARD
      </label>
      <InputMask
        mask='9999-9999-9999-9999'
        name='card'
        id='mastercard'
        className={classNames(styles.input, { [styles.error]: formik.errors.card })}
        value={formik.values.card}
      />
      <div className={styles.dubleInput}>
        <InputMask
          mask='99/99'
          type='text'
          name='cardDate'
          id='cardDate'
          className={classNames(styles.input, { [styles.error]: formik.errors.cardDate })}
          placeholder='YY/MM'
          value={formik.values.cardDate}
        />
        {formik.errors.cardDate}
        <InputMask
          mask='999'
          type={isHidden ? 'password' : 'text'}
          name='cardCVV'
          id='cardCVV'
          className={classNames(styles.input, { [styles.error]: formik.errors.cardCVV })}
          placeholder='CVV'
          value={formik.values.cardCVV}
        />
        <div
          aria-hidden
          className={classNames(styles.eyeButton, { [styles.active]: !isHidden })}
          onClick={() => setIsHidden(!isHidden)}
        />
      </div>
    </form>
  );
};
