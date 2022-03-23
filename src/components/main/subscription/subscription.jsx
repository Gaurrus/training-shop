import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import womanImg from './assets/woman.svg';
import manImg from './assets/man.svg';

import styles from './subscription.module.scss';
import { postSubscriptionRequest } from '../../store/subscription-post-state';

export const Subscription = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(postSubscriptionRequest(values));
    console.log(values);
    setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.mail) {
      errors.mail = 'Поле обязательно';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
      errors.mail = 'Ошибка адреса';
    }
    return errors;
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
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <span className={styles.subtitle}>Special Offer</span>
              <h2 className={styles.title}>
                Subscribe{' '}
                <p className={styles.parag}>
                  And <span className={styles.sale}> Get 10% Off</span>
                </p>
              </h2>
              <ErrorMessage name='mail'>{(msg) => <div className={styles.inputError}>{msg}</div>}</ErrorMessage>
              <Field type='text' name='mail' placeholder='Enter your mail' className={styles.input} />
              <button className={styles.button} type='submit' disabled={isSubmitting}>
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
