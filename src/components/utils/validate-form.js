export const validate = (values) => {
  const errors = {};
  if (!values.mail) {
    errors.mail = 'Поле должно быть заполнено';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
    errors.mail = 'Ошибка формата e-mail';
  }
  return errors;
};

export const validateReview = (values) => {
  const errors = {};
  if (!values.review) {
    errors.review = 'Поле должно быть заполнено';
  }
  if (!values.username) {
    errors.username = 'Поле должно быть заполнено';
  }
  return errors;
};

const date = new Date();

const toodayMonth = date.getMonth();

const toodayYear = date.getFullYear() - 2000;

export const validateCart = (values) => {
  const errors = {};
  if (!values.phone || values.phone === '+375(__)_______') {
    errors.phone = 'Поле должно быть заполнено';
  } else if (!/^(\+?375)(\()(33|44|29|25|)(\))(\d*)/i.test(values.phone)) {
    errors.phone = 'Ошибка формата номера';
  }
  if (!values.email) {
    errors.email = 'Поле должно быть заполнено';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Ошибка формата e-mail';
  }
  if (!values.country) {
    errors.country = 'Поле должно быть заполнено';
  }
  if (!values.cashEmail) {
    errors.cashEmail = 'Поле должно быть заполнено';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.cashEmail)) {
    errors.cashEmail = 'Ошибка формата e-mail';
  }
  if (!values.city) {
    errors.city = 'Поле должно быть заполнено';
  }
  if (!values.street) {
    errors.street = 'Поле должно быть заполнено';
  }
  if (!values.house) {
    errors.house = 'Поле должно быть заполнено';
  }
  if (!values.postcode || values.postcode === '______') {
    errors.postcode = 'Поле должно быть заполнено';
  } else if (!/(\d){6}/i.test(values.card)) {
    errors.card = 'мало знаков индекса';
  }
  if (!values.storeAddress) {
    errors.storeAddress = 'Поле должно быть заполнено';
  }
  if (!values.card || values.card === '________________') {
    errors.card = 'Поле должно быть заполнено';
  } else if (!/((\d){4}(\d){4}(\d){4}(\d){4})/i.test(values.card)) {
    errors.card = 'некорректный номер карты';
  }
  if (!values.cardDate || values.cardDate === '__/__') {
    errors.cardDate = 'Поле должно быть заполнено';
  } else if (
    (+values.cardDate.slice(-2) === +toodayYear &&
      +values.cardDate.slice(0, 2) >= 1 &&
      +values.cardDate.slice(0, 2) < +toodayMonth) ||
    +values.cardDate.slice(0, 2) > 12 ||
    +values.cardDate.slice(0, 2) <= 0
  ) {
    errors.cardDate = 'ошибка месяца';
  } else if (+values.cardDate.slice(-2) < +toodayYear) {
    console.log(+values.cardDate.slice(0, 2));
    errors.cardDate = 'ошибка года';
  }
  if (!values.cardCVV || values.cardCVV === '___') {
    errors.cardCVV = 'Поле должно быть заполнено';
  }
  if (!values.agreenment) {
    errors.agreenment = 'Вы должны согласиться на обработку личной информации';
  }
  return errors;
};
