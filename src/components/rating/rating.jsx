import PropTypes from 'prop-types';

import { StarActive } from '../star-active/star-active';
import { StarUnactive } from '../star-unactive';
import styles from './rating.module.scss';

const maxRating = 5;

export const Rating = ({ rating }) => {
  const arrOfRating = Array.from(Array(maxRating).keys());
  return (
    <div className={styles.wrapper}>
      {arrOfRating.map((item) => (item < rating ? <StarActive key={item} /> : <StarUnactive key={item} />))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
