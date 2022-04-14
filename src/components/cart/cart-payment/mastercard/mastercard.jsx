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
      {formik.errors.card && <span className={styles.errorMessage}>{formik.errors.card}</span>}
      <div className={styles.dubleInput}>
        <div>
          <InputMask
            mask='99/99'
            type='text'
            name='cardDate'
            id='cardDate'
            className={classNames(styles.input, { [styles.error]: formik.errors.cardDate })}
            placeholder='YY/MM'
            value={`${formik.values.cardDate
              .slice(0, 2)
              .replace(/(12|13|14|15|16|17|18|19)|[2-9][0-9]/, '12')}${formik.values.cardDate.slice(-2)}`}
          />
          {formik.errors.cardDate && <span className={styles.errorMessage}>{formik.errors.cardDate}</span>}
        </div>
        <div>
          <InputMask
            mask='999'
            type={isHidden ? 'password' : 'text'}
            name='cardCVV'
            id='cardCVV'
            className={classNames(styles.input, { [styles.error]: formik.errors.cardCVV })}
            placeholder='CVV'
            value={formik.values.cardCVV}
          />
          {formik.errors.cardCVV && <span className={styles.errorMessage}>{formik.errors.cardCVV}</span>}
        </div>
        <div
          aria-hidden
          className={classNames(styles.eyeButton, { [styles.active]: !isHidden })}
          onClick={() => setIsHidden(!isHidden)}
        />
      </div>
    </form>
  );
};
