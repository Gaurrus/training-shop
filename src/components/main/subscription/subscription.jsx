import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import classNames from 'classnames';

import { postSubscriptionRequest } from '../../store/subscription-post-state';
import { validate } from '../../utils/validate-form';
import { subscriptionSelector } from '../../../selectors/index';

import womanImg from './assets/woman.svg';
import manImg from './assets/man.svg';

import styles from './subscription.module.scss';

export const Subscription = () => {
  const dispatch = useDispatch();
  const [isMailSend, setIsMailSend] = useState(false);

  const { isError, isLoading, isIndicator, data } = useSelector(subscriptionSelector);

  const handleSubmit = (values, setSubmitting, resetForm, initialValues) => {
    const indicator = 's';
    dispatch(postSubscriptionRequest({ values, indicator }));
    setSubmitting(false);
    if (isError && !isLoading) resetForm(initialValues);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.subscription}>
        <Formik
          initialValues={{
            mail: '',
          }}
          validate={validate}
          onSubmit={(values, { setSubmitting, resetForm }, initialValues) =>
            handleSubmit(values, setSubmitting, resetForm, initialValues)
          }
        >
          {({ isSubmitting, values, errors }) => (
            <Form className={styles.form}>
              <span className={styles.subtitle}>Special Offer</span>
              <h2 className={styles.title}>
                Subscribe{' '}
                <p className={styles.parag}>
                  And <span className={styles.sale}> Get 10% Off</span>
                </p>
              </h2>
              <ErrorMessage name='mail'>
                {(msg) => {
                  return <div className={styles.inputError}>{msg}</div>;
                }}
              </ErrorMessage>
              <Field
                data-test-id='main-subscribe-mail-field'
                type='text'
                name='mail'
                placeholder='Enter your mail'
                className={styles.input}
              />
              {isError && !isLoading && isIndicator === 's' && <div className={styles.inputError}>Ошибка отправки</div>}
              {!isError && !isLoading && data.mail && isIndicator === 's' && (
                <div className={styles.inputSucces}>Успешно отправлено</div>
              )}
              <button
                data-test-id='main-subscribe-mail-button'
                className={styles.button}
                type='submit'
                disabled={isSubmitting || data.mail === values.mail || errors.mail || values.mail === ''}
              >
                <div className={classNames(styles.loading, { [styles.active]: isLoading && !isError })}>
                  <div className={styles.loadinIco} />
                </div>
                Subscribe
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <img src={womanImg} alt='woman' className={styles.woman} />
      <img src={manImg} alt='man' className={styles.man} />
    </div>
  );
};
