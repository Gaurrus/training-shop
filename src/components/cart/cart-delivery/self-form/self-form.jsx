/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './self-form.module.scss';

export const SelfForm = ({ formik }) => (
  <form onChange={formik.handleChange}>
    <div className={styles.postDeliveryData}>
      <div className={styles.dataItem}>
        <label htmlFor='phone' className={styles.dataLabel}>
          PHONE
        </label>
        <input
          type='text'
          name='phone'
          id='phone'
          className={styles.input}
          placeholder='+375  (__) _______'
          value={formik.values.phone}
        />
      </div>
      <div className={styles.dataItem}>
        <label htmlFor='email' className={styles.dataLabel}>
          e-mail
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className={styles.input}
          placeholder='e-mail'
          value={formik.values.email}
        />
      </div>
      <div className={styles.dataItem}>
        <label htmlFor='adress' className={styles.dataLabel}>
          ADRESS OF STORE
        </label>
        <input
          type='text'
          name='country'
          id='adress'
          className={styles.input}
          placeholder='Country'
          value={formik.values.country}
        />
        <select
          name='storeAdress'
          id='store'
          className={styles.input}
          placeholder='Store adress'
          value={formik.values.storeAdress}
        >
          <option value='minsk'>Minsk</option>
          <option value='orsha'>Orsha</option>
          <option value='tolochin'>Tolochin</option>
        </select>
      </div>
      <label htmlFor='agreenment' className={styles.checkboxLabel}>
        <input type='checkbox' id='agreenment' name='agreenment' className={styles.castomCheckbox} />I agree to the
        processing of my personal information
      </label>
    </div>
  </form>
);
