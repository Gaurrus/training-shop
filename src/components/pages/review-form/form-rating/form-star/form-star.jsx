/* eslint-disable react/prop-types */
import starImg from './assets/star-big-active.svg';

import styles from './star.module.scss';

export const FormStar = ({ handleChange, index }) => (
  <img aria-hidden src={starImg} alt='' className={styles.star} onClick={() => handleChange(index)} />
);
