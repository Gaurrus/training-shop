import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

import { MiniSocials } from '../../mini-socials/mini-socials';

import { postSubscriptionRequest } from '../../store/subscription-post-state';
import { validate } from '../../utils/validate-form';
import { subscriptionSelector } from '../../../selectors/index';

import styles from './footer-join.module.scss';

export const FooterJoin = () => {
  const dispatch = useDispatch();
  const formikRef = useRef();
  const [message, setMessage] = useState('');
  const location = useLocation();

  const { isError, isLoading, isIndicator, data } = useSelector(subscriptionSelector);

  const handleSubmit = (values, { setSubmitting }) => {
    const indicator = 'f';
    dispatch(postSubscriptionRequest({ values, indicator }));
    setSubmitting(false);
  };

  useEffect(() => {
    switch (isError && isIndicator === 'f') {
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
  }, [isLoading, isError]);

  useEffect(() => {
    setMessage('');
  }, []);
  useEffect(() => {
    setMessage('');
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.joingBlock}>
        <div className={styles.title}>BE IN TOUCH WITH US:</div>
        <Formik
          innerRef={formikRef}
          initialValues={{
            mail: '',
          }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, errors }) => (
            <Form className={styles.joing}>
              <ErrorMessage name='mail'>{(msg) => <div className={styles.inputError}>{msg}</div>}</ErrorMessage>
              {/* {data?.mail === values?.mail && <div className={styles.inputError}>Subscribed</div>} */}
              <Field
                data-test-id='footer-mail-field'
                className={styles.input}
                type='text'
                placeholder='Enter your email'
                name='mail'
              />
              {isIndicator === 'f' && <div className={styles.inputSucces}>{message}</div>}
              <div className={classNames(styles.loading, { [styles.active]: isLoading && !isError })}>
                <div className={styles.loadinIco} />
              </div>
              <button
                data-test-id='footer-subscribe-mail-button'
                type='submit'
                disabled={isSubmitting || errors.mail || values.mail === ''}
                className={styles.joingButton}
              >
                JOIN US
              </button>
            </Form>
          )}
        </Formik>
        <MiniSocials />
      </div>
    </div>
  );
};
