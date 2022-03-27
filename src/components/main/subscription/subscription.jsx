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
  const [isFormError, setIsFormError] = useState(false);

  const { isError, isLoading, data } = useSelector(subscriptionSelector);

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(postSubscriptionRequest(values));
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.subscription}>
        <Formik
          initialValues={{
            mail: '',
          }}
          validate={validate}
          onSubmit={handleSubmit}
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
              <Field type='text' name='mail' placeholder='Enter your mail' className={styles.input} />
              {isError && values.mail && <div className={styles.inputError}>Ошибка отправки</div>}
              {!isError && data.mail === values.mail && <div className={styles.inputSucces}>Успешно отправлено</div>}
              <button
                className={styles.button}
                type='submit'
                disabled={isSubmitting || data.mail === values.mail || errors.mail || values.mail === ''}
              >
                Subscribe
              </button>
              <div className={classNames(styles.loading, { [styles.active]: isLoading })}>
                <div className={styles.loadinIco} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <img src={womanImg} alt='woman' className={styles.woman} />
      <img src={manImg} alt='man' className={styles.man} />
    </div>
  );
};
