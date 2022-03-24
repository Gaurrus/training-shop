export const validate = (values) => {
  const errors = {};
  if (!values.mail) {
    errors.mail = 'Поле обязательно';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
    errors.mail = 'Ошибка адреса';
  }
  return errors;
};
