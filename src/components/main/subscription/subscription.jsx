import { useEffect, useRef, useState } from 'react';
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
  const formikRef = useRef();
  const [message, setMessage] = useState('');

  const { isSubscriptionError, isSubscriptionLoading, data } = useSelector(subscriptionSelector);

  const handleSubmit = (values, setSubmitting) => {
    dispatch(postSubscriptionRequest({ values }));
    setSubmitting(false);
  };

  useEffect(() => {
    switch (isSubscriptionError) {
      case true:
        setMessage('Sending error');
        formikRef?.current?.setFieldValue('mail', data.mail);
        break;
      case false:
        setMessage('Succesfully send');
        formikRef?.current?.resetForm(formikRef?.current?.initialValues);
        break;
      default:
        break;
    }
  }, [isSubscriptionLoading, isSubscriptionError]);

  useEffect(() => {
    setMessage('');
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.subscription}>
        <Formik
          innerRef={formikRef}
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
              <div className={styles.inputError}>{message}</div>
              <button
                data-test-id='main-subscribe-mail-button'
                className={styles.button}
                type='submit'
                disabled={isSubmitting || errors.mail || values.mail === ''}
              >
                <div
                  className={classNames(styles.loading, {
                    [styles.active]: isSubscriptionLoading && !isSubscriptionError,
                  })}
                >
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
