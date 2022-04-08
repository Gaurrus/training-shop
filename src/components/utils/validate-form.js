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

export const validateCart = (values) => {
  const errors = {};
  if (!values.phone) {
    errors.phone = 'Required field';
  }
  if (!values.email) {
    errors.email = 'Required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'E-mail format error';
  }
  if (!values.country) {
    errors.country = 'Required field';
  }
  if (!values.cashEmail) {
    errors.cashEmail = 'Required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.cashEmail)) {
    errors.cashEmail = 'E-mail format error';
  }
  if (!values.city) {
    errors.city = 'Required field';
  }
  if (!values.street) {
    errors.street = 'Required field';
  }
  if (!values.house) {
    errors.house = 'Required field';
  }
  if (!values.postcode) {
    errors.postcode = 'Required field';
  }
  if (!values.storeAddress) {
    errors.storeAddress = 'Required field';
  }
  if (!values.card) {
    errors.card = 'Required field';
  }
  if (!values.cardDate) {
    errors.cardDate = 'Required field';
  }
  if (!values.cardCVV) {
    errors.cardCVV = 'Required field';
  }
  if (!values.agreenment) {
    errors.agreenment = 'Required field';
  }
  return errors;
};
