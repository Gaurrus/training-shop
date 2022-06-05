export type Src = {
  src: string;
};

export type Formik = {
  initialValues: {
    phone: string;
    email: string;
    cashEmail: string;
    country: string;
    city: string;
    street: string;
    house: string;
    apartment: string;
    postcode: string;
    storeAddress: string;
    agreenment: boolean;
    paymentType: string;
    card: string;
    cardDate: string;
    cardCVV: string;
  };
  validateOnChange: boolean;
  validateOnBlur: boolean;
  validate: (a: string)=> void;
};