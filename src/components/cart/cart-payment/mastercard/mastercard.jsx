/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';

import styles from './mastercard.module.scss';

export const Mastercard = ({ formik }) => {
  const [isHidden, setIsHidden] = useState(true);
  // const [card, setCard] = useState();
  // const inputCard = useRef();

  // const handleChange = () => {
  //   const cardValue = inputCard.current.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
  //   inputCard.current.value = !cardValue[2]
  //     ? cardValue[1]
  //     : `${cardValue[1]}-${cardValue[2]}${`${cardValue[3] ? `-${cardValue[3]}` : ''}`}${`${
  //         cardValue[4] ? `-${cardValue[4]}` : ''
  //       }`}`;
  //   const numbers = inputCard.current.value.replace(/(\D)/g, '');
  //   setCard(numbers);
  // };

  // useEffect(() => {
  //   handleChange();
  // }, [card]);
  return (
    <form className={styles.dataItem} onChange={formik.handleChange}>
      <label htmlFor='mastercard' className={styles.dataLabel}>
        CARD
      </label>
      <IMaskInput
        mask='0000 0000 0000 0000'
        type='text'
        name='card'
        id='mastercard'
        className={classNames(styles.input, { [styles.error]: formik.errors.card })}
        placeholder='---- ---- ---- ----'
        value={formik.values.card}
      />
      <div className={styles.dubleInput}>
        <IMaskInput
          mask='00/00'
          type='text'
          name='cardDate'
          id='cardDate'
          className={classNames(styles.input, { [styles.error]: formik.errors.cardDate })}
          placeholder='YY/MM'
          value={formik.values.cardDate}
        />
        <IMaskInput
          mask='000'
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
