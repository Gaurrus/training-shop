/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './visa.module.scss';

export const Visa = ({ formik }) => (
  <form className={styles.dataItem} onChange={formik.handleChange}>
    <label htmlFor='visa' className={styles.dataLabel}>
      CARD
    </label>
    <input
      type='text'
      name='card'
      id='visa'
      className={styles.input}
      placeholder='----------------'
      values={formik.values.card}
    />
    <div className={styles.dubleInput}>
      <input
        type='text'
        name='cardDate'
        id='cardDate'
        className={styles.input}
        placeholder='YY/MM'
        values={formik.values.cardDate}
      />
      <input
        type='text'
        name='cardCVV'
        id='cardCVV'
        className={styles.input}
        placeholder='CVV'
        values={formik.values.cardCVV}
      />
    </div>
  </form>
);
