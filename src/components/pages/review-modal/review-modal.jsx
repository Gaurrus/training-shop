/* eslint-disable react/prop-types */
import classNames from 'classnames';

import styles from './review-modal.module.scss';

export const ReviewModal = ({ isReviewActive, setReviewActive, children }) => {
  return (
    <div
      aria-hidden
      onClick={(e) => {
        e.stopPropagation();
        setReviewActive(false);
      }}
      className={classNames(styles.wrapper, { [styles.active]: isReviewActive })}
    >
      <div
        aria-hidden
        onClick={(e) => e.stopPropagation()}
        className={classNames(styles.content, { [styles.active]: isReviewActive })}
      >
        {children}
      </div>
    </div>
  );
};
