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
  } else if (!/^(\+?375|80|\+7)(33|44|29|25|\d{3})(\d{7})/i.test(values.phone)) {
    errors.phone = 'phone format error';
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
  } else if (!/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4}){16}/i.test(values.card)) {
    errors.card = 'Card number incorrect';
  }
  if (!values.cardDate) {
    errors.cardDate = 'Required field';
  } else if (!/(\d(1-12))(\/)?(\d(22,))/i.test(values.cardDate)) {
    errors.cardDate = 'Card number incorrect';
  }
  if (!values.cardCVV) {
    errors.cardCVV = 'Required field';
  }
  if (!values.agreenment) {
    errors.agreenment = 'Required field';
  }
  return errors;
};
