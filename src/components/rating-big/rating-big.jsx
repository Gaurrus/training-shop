import PropTypes from 'prop-types';
import { StarBigActive } from '../star-big-active/star-big-active';
import { StarBigUnactive } from '../star-big-unactive/star-big-unactive';

import styles from './rating.module.scss';

const maxRating = 5;

export const RatingBig = ({ rating }) => {
  const arrOfRating = Array.from(Array(maxRating).keys());
  return (
    <div className={styles.wrapper}>
      {arrOfRating.map((item) => (item < rating ? <StarBigActive /> : <StarBigUnactive />))}
    </div>
  );
};

RatingBig.propTypes = {
  rating: PropTypes.number.isRequired,
};
