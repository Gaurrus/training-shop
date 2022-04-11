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
  if (!values.phone || values.phone === '+375(__)_______') {
    errors.phone = 'Required field';
  } else if (!/^(\+?375)(\()(33|44|29|25|)(\))(\d*)/i.test(values.phone)) {
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
  if (!values.postcode || values.postcode === 'BY ______') {
    errors.postcode = 'Required field';
  }
  if (!values.storeAddress) {
    errors.storeAddress = 'Required field';
  }
  if (!values.card || values.card === '____-____-____-____') {
    errors.card = 'Required field';
  } else if (!/(\d){4}(-)(\d){4}(-)(\d){4}(-)(\d){4}/i.test(values.card)) {
    errors.card = 'card number incorrect';
  }
  if (!values.cardDate || values.cardDate === '__/__') {
    errors.cardDate = 'Required field';
  } else if (!/((01|02|03|04|05|06|07|08|09|10|11|12))\/(22|23|24|25|26|27|28)/i.test(values.cardDate)) {
    errors.cardDate = 'incorrect date';
  } else if (parseInt(values.cardDate, 10)) {
    errors.cardDate = 'incorrect date';
  }
  if (!values.cardCVV || values.cardCVV === '___') {
    errors.cardCVV = 'Required field';
  }
  if (!values.agreenment) {
    errors.agreenment = 'Required field';
  }
  return errors;
};

const toodayMonth = new Date();

console.log(toodayMonth.getMonth());
console.log(toodayMonth.getFullYear());
