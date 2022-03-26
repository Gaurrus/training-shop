/* eslint-disable react/prop-types */
import starImg from './assets/star-big-active.svg';

import styles from './star.module.scss';

export const FormStarUnactive = ({ handleChange, index }) => (
  <img aria-hidden src={starImg} alt='star-unactive' className={styles.star} onClick={() => handleChange(index)} />
);
