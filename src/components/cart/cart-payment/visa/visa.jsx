/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';

import styles from './visa.module.scss';

export const Visa = ({ formik }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={styles.dataItem}>
      <label htmlFor='visa' className={styles.dataLabel}>
        CARD
      </label>
      <InputMask
        mask='9999999999999999'
        type='text'
        name='card'
        id='visa'
        className={classNames(styles.input, { [styles.error]: formik.errors.card && formik.touched.card })}
        value={formik.values.card}
      />
      {formik.errors.card && formik.touched.card && <span className={styles.errorMessage}>{formik.errors.card}</span>}
      <div className={styles.dubleInput}>
        <div>
          <InputMask
            mask='99/99'
            type='text'
            name='cardDate'
            id='cardDate'
            className={classNames(styles.input, { [styles.error]: formik.errors.cardDate && formik.touched.cardDate })}
            placeholder='YY/MM'
            value={`${formik.values.cardDate
              .slice(0, 2)
              .replace(/(12|13|14|15|16|17|18|19)|[2-9][0-9]/, '12')}${formik.values.cardDate.slice(-2)}`}
          />
          {formik.errors.cardDate && formik.touched.cardDate && (
            <span className={styles.errorMessage}>{formik.errors.cardDate}</span>
          )}
        </div>
        <div>
          <InputMask
            mask='999'
            type={isHidden ? 'password' : 'text'}
            name='cardCVV'
            id='cardCVV'
            className={classNames(styles.input, { [styles.error]: formik.errors.cardCVV && formik.touched.cardCVV })}
            placeholder='CVV'
            value={formik.values.cardCVV}
          />
          {formik.errors.cardCVV && formik.touched.cardCVV && (
            <span className={styles.errorMessage}>{formik.errors.cardCVV}</span>
          )}
        </div>
        <div aria-hidden className={styles.eyeButton} onClick={() => setIsHidden(!isHidden)} />
      </div>
    </div>
  );
};
