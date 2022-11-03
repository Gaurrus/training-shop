/* eslint-disable react/prop-types */

import { FormStar } from './form-star/form-star';
import { FormStarUnactive } from './form-star-unactive/form-star-unactive';

import styles from './rating.module.scss';

const maxRating = 5;

export const FormRating = ({ handleRating, setHandleRating }) => {
  const arrOfRating = Array.from(Array(maxRating).keys());

  const handleChange = (index) => {
    if (handleRating === index + 1) {
      setHandleRating(1);
    } else {
      setHandleRating(index + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      {arrOfRating.map((item, index) =>
        item < handleRating ? (
          <FormStar key={item} handleChange={handleChange} index={index} />
        ) : (
          <FormStarUnactive key={item} handleChange={handleChange} index={index} />
        )
      )}
    </div>
  );
};
