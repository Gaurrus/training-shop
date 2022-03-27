/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import classNames from 'classnames';

import styles from './review-form.module.scss';
import { FormRating } from './form-rating';

export const ReviewForm = ({ id, postData, setPostData }) => {
  const [handleRating, setHandleRating] = useState(0);

  const handleSubmit = (values, resetForm, initialValues) => {
    const data = {
      id: id,
      name: values.username,
      text: values.review,
      rating: handleRating,
    };
    console.log(data);
    setHandleRating(0);
    resetForm(initialValues);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        review: '',
      }}
      onSubmit={(values, { resetForm }, initialValues) => {
        handleSubmit(values, resetForm, initialValues);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={classNames(styles.item)}>
          <h2 className={styles.title}>Review</h2>
          <FormRating handleRating={handleRating} setHandleRating={setHandleRating} />
          <label htmlFor='username' className={styles.itemLabel}>
            Ваше имя?
          </label>
          <Field
            className={classNames(styles.input)}
            id='username'
            name='username'
            type='text'
            placeholder='Введите имя'
          />
          <label htmlFor='review' className={styles.itemLabel}>
            Оставьте отзыв о товаре
          </label>
          <Field
            className={classNames(styles.input)}
            name='review'
            id='review'
            type='text'
            placeholder='Напишите отзыв о товаре'
          />
          <button className={classNames(styles.button, styles.blackButton)} disabled={isSubmitting} type='submit'>
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  );
};
