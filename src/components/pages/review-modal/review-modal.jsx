/* eslint-disable react/prop-types */
import classNames from 'classnames';

import styles from './review-modal.module.scss';

export const ReviewModal = ({ isReviewActive, setReviewActive, children, setSend }) => {
  return (
    <div
      aria-hidden
      onClick={(e) => {
        e.stopPropagation();
        setReviewActive(false);
        setSend(false);
      }}
      className={classNames(styles.wrapper, { [styles.active]: isReviewActive })}
    >
      <div
        data-test-id='review-modal'
        aria-hidden
        onClick={(e) => e.stopPropagation()}
        className={classNames(styles.content, { [styles.active]: isReviewActive })}
      >
        {children}
      </div>
    </div>
  );
};
