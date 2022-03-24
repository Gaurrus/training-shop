import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { MiniSocials } from '../../mini-socials/mini-socials';

import { postSubscriptionRequest } from '../../store/subscription-post-state';
import { validate } from '../../utils/validate-form';
import { subscriptionSelector } from '../../../selectors/index';

import styles from './footer-join.module.scss';

export const FooterJoin = () => {
  const dispatch = useDispatch();

  const { isError, isLoading, data } = useSelector(subscriptionSelector);

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(postSubscriptionRequest(values));
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.joingBlock}>
        <div className={styles.title}>BE IN TOUCH WITH US:</div>
        <Formik
          initialValues={{
            mail: '',
          }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form className={styles.joing}>
              <ErrorMessage name='mail'>{(msg) => <div className={styles.inputError}>{msg}</div>}</ErrorMessage>
              {isError && values.mail && <div className={styles.inputSucces}>Ошибка отправки</div>}
              {!isError && data.mail === values.mail && <div className={styles.inputSucces}>Успешно отправлено</div>}
              <Field className={styles.input} type='text' placeholder='Enter your email' name='mail' />
              <button type='submit' disabled={isSubmitting} className={styles.joingButton}>
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
