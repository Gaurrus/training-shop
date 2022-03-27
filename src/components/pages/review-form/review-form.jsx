/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import classNames from 'classnames';

import { FormRating } from './form-rating';

import { validateReview } from '../../utils/validate-form';
import { reviewPostRequest } from '../../store/review-post-state';
import { reviewPostSelector } from '../../../selectors';

import styles from './review-form.module.scss';

export const ReviewForm = ({ id, send, setSend, setReviewActive }) => {
  const [handleRating, setHandleRating] = useState(0);
  const dispatch = useDispatch();

  const { isError } = useSelector(reviewPostSelector);

  const handleSubmit = (values, resetForm, initialValues) => {
    const review = {
      id: id,
      name: values.username,
      text: values.review,
      rating: handleRating,
    };
    dispatch(reviewPostRequest(review));
    setHandleRating(0);
    resetForm(initialValues);
    setSend(true);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        review: '',
      }}
      validate={validateReview}
      onSubmit={(values, { resetForm }, initialValues) => {
        handleSubmit(values, resetForm, initialValues);
      }}
    >
      {({ isSubmitting, errors, values }) => (
        <Form className={classNames(styles.item)}>
          <div className={styles.header}>
            <h2 className={styles.title}>Review form</h2>
            <div className={styles.closeButton} aria-hidden onClick={() => setReviewActive(false)}>
              <div className={styles.line} />
              <div className={styles.line} />
            </div>
          </div>
          <div className={styles.rating}>
            <FormRating handleRating={handleRating} setHandleRating={setHandleRating} />
          </div>
          <div>
            <label htmlFor='username' className={styles.itemLabel}>
              Name
              <Field
                className={classNames(styles.input)}
                id='username'
                name='username'
                type='text'
                placeholder='Input your name'
              />
            </label>
            <ErrorMessage name='username'>
              {(msg) => {
                return <div className={styles.error}>{msg}</div>;
              }}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor='review' className={styles.itemLabel}>
              Review text
              <Field
                className={classNames(styles.input)}
                name='review'
                id='review'
                as='textarea'
                cols='55'
                placeholder='Leave your feedback'
              />
            </label>
            <ErrorMessage name='review'>
              {(msg) => {
                return <div className={styles.error}>{msg}</div>;
              }}
            </ErrorMessage>
          </div>
          <button
            className={classNames(styles.button, styles.blackButton)}
            disabled={
              isSubmitting ||
              errors.review ||
              errors.username ||
              values.review === '' ||
              values.username === '' ||
              handleRating === 0
            }
            type='submit'
          >
            SEND
          </button>
          {isError && <div className={styles.error}>Sending error</div>}
          {!isError && send && <div className={styles.error}>Succesfully send</div>}
        </Form>
      )}
    </Formik>
  );
};
