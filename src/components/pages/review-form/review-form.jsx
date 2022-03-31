/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import classNames from 'classnames';

import { FormRating } from './form-rating';

import { validateReview } from '../../utils/validate-form';
import { reviewPostRequest } from '../../store/review-post-state';
import { reviewPostSelector } from '../../../selectors';
import { getProductsRequest } from '../../store/products-state';

import styles from './review-form.module.scss';

export const ReviewForm = ({ id, handleModalToggle }) => {
  const [handleRating, setHandleRating] = useState(1);
  const dispatch = useDispatch();
  const formikRef = useRef();
  const [message, setMessage] = useState('');
  const location = useLocation();

  const { data, isError, isLoading } = useSelector(reviewPostSelector);

  const handleSubmit = (values) => {
    const review = {
      id: id,
      name: values.username,
      text: values.review,
      rating: handleRating,
    };
    dispatch(reviewPostRequest(review));
  };

  useEffect(() => {
    switch (isError) {
      case true:
        formikRef?.current?.setSubmitting(false);
        setMessage('Sending error');
        break;
      case false:
        setMessage('Succesfully send');
        setHandleRating(1);
        formikRef?.current?.resetForm(formikRef?.current?.initialValues);
        break;
      default:
        break;
    }
  }, [isLoading, isError]);

  useEffect(() => {
    setMessage('');
  }, []);
  useEffect(() => {
    setMessage('');
  }, [location]);

  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        username: '',
        review: '',
      }}
      validate={validateReview}
      onSubmit={(values, { resetForm }, initialValues) => {
        handleSubmit(values, resetForm, initialValues);
      }}
    >
      {({ isSubmitting, errors, values, resetForm, initialValues }) => (
        <Form className={classNames(styles.item)}>
          <div className={styles.header}>
            <h2 className={styles.title}>Review form</h2>
            <div
              className={styles.closeButton}
              aria-hidden
              onClick={() => {
                handleModalToggle();
                resetForm(initialValues);
                setHandleRating(1);
              }}
            >
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
                data-test-id='review-name-field'
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
                data-test-id='review-text-field'
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
            data-test-id='review-submit-button'
            className={classNames(styles.button, styles.blackButton)}
            disabled={isSubmitting || errors.review || errors.username}
            type='submit'
          >
            SEND
          </button>
          {/* {isError && isLoading && <div className={styles.error}>Loading...</div>} */}
          {/* {isError && !isLoading && <div className={styles.error}>Sending error</div>} */}
          <div className={styles.error}>{message}</div>
        </Form>
      )}
    </Formik>
  );
};
