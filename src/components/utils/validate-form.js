export const validate = (values) => {
  const errors = {};
  if (!values.mail) {
    errors.mail = 'Required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
    errors.mail = 'E-mail format error';
  }
  return errors;
};

export const validateReview = (values) => {
  const errors = {};
  if (!values.review) {
    errors.review = 'Required field';
  }
  if (!values.username) {
    errors.username = 'Required field';
  }
  return errors;
};
