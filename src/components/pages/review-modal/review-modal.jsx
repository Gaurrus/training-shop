/* eslint-disable react/prop-types */
import { createPortal } from 'react-dom';

import classNames from 'classnames';

import styles from './review-modal.module.scss';

export const ReviewModal = ({ isReviewActive, handleModalToggle, children }) =>
  createPortal(
    isReviewActive && (
      <div
        aria-hidden
        onClick={(e) => {
          e.stopPropagation();
          handleModalToggle();
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
    ),
    document.getElementById('root')
  );
