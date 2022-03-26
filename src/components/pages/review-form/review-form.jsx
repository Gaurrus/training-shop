/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import classNames from 'classnames';

import styles from './review-form.module.scss';
import { FormRating } from './form-rating';

export const ReviewForm = () => {
  const [state, setState] = useState(false);
  return (
    <Formik
      initialValues={{
        username: '',
        review: '',
      }}
      // validate={validate}
      // onSubmit={handleSubmit}
    >
      {({ isSubmitting, values }) => (
        <Form className={classNames(styles.item)}>
          <h2 className={styles.title}>Review</h2>
          <FormRating />
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
            as='textarea'
            cols='50'
            rows='10'
          />
          <button className={classNames(styles.button, styles.blackButton)} disabled={isSubmitting} type='submit'>
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  );
};
