export const validate = (values) => {
  const errors = {};
  if (!values.mail) {
    errors.mail = 'required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
    errors.mail = 'E-mail format error';
  }
  return errors;
};

export const validateReview = (values) => {
  const errors = {};
  if (!values.review) {
    errors.review = 'required field';
  }
  if (!values.username) {
    errors.username = 'required field';
  }
  return errors;
};

const date = new Date();

const toodayMonth = date.getMonth();

const toodayYear = date.getFullYear() - 2000;

export const validateCart = (values) => {
  const errors = {};
  if (!values.phone || values.phone === '+375(__)_______') {
    errors.phone = 'required field';
  } else if (!/^(\+?375)(\()(33|44|29|25|)(\))(\d*)/i.test(values.phone)) {
    errors.phone = 'phone format error';
  }
  if (!values.email) {
    errors.email = 'required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'E-mail format error';
  }
  if (!values.country) {
    errors.country = 'required field';
  }
  if (!values.cashEmail) {
    errors.cashEmail = 'required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.cashEmail)) {
    errors.cashEmail = 'E-mail format error';
  }
  if (!values.city) {
    errors.city = 'required field';
  }
  if (!values.street) {
    errors.street = 'required field';
  }
  if (!values.house) {
    errors.house = 'required field';
  }
  if (!values.postcode || values.postcode === 'BY ______') {
    errors.postcode = 'required field';
  }
  if (!values.storeAddress) {
    errors.storeAddress = 'required field';
  }
  if (!values.card || values.card === '____-____-____-____') {
    errors.card = 'required field';
  } else if (!/(\d){4}(-)(\d){4}(-)(\d){4}(-)(\d){4}/i.test(values.card)) {
    errors.card = 'card number incorrect';
  }
  if (!values.cardDate || values.cardDate === '__/__') {
    errors.cardDate = 'required field';
  } else if (
    (+values.cardDate.slice(-2) === +toodayYear &&
      +values.cardDate.slice(0, 2) >= 1 &&
      +values.cardDate.slice(0, 2) < +toodayMonth) ||
    +values.cardDate.slice(0, 2) > 12 ||
    +values.cardDate.slice(0, 2) <= 0
  ) {
    errors.cardDate = 'month error';
  } else if (+values.cardDate.slice(-2) < +toodayYear) {
    console.log(+values.cardDate.slice(0, 2));
    errors.cardDate = 'year error';
  }
  if (!values.cardCVV || values.cardCVV === '___') {
    errors.cardCVV = 'required field';
  }
  if (!values.agreenment) {
    errors.agreenment = 'required field';
  }
  return errors;
};
