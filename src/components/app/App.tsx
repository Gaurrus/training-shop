/* eslint-disable no-debugger */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Route, Routes, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { Header } from '../header/header';
import { Footer } from '../footer';
import { Main } from '../main';
import { GenderPage } from '../pages/gender-page';
import { ProductPage } from '../pages/product-page';
import { Modal } from '../modal';
import { Cart } from '../cart';
import { Loader } from '../loader';

import { disableBodyScroll, enableBodyScroll } from '../utils/scroll-lock';

import { productsSelector } from '../../selectors';
import { LoadingIco } from '../loader/loading-ico';
import { validateCart as validate } from '../utils/validate-form';

import { getProductsRequest } from '../store/products-state';

import './reset.scss';
import './App.scss';
import { FaultOfLoad } from '../loader/fault-of-load';
import { paymentsReset } from '../store/payments-state';

export const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  useEffect(() => {
    document.title = 'CleverShop';
  }, []);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  const products = useSelector(productsSelector);

  const [isCartActive, setIsCartActive] = useState(false);
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const formik = useFormik({
    initialValues: {
      phone: '',
      email: '',
      cashEmail: '',
      country: '',
      city: '',
      street: '',
      house: '',
      apartment: '',
      postcode: '',
      storeAddress: '',
      agreenment: false,
      paymentType: '',
      card: '',
      cardDate: '',
      cardCVV: '',
    },
    validateOnChange: false,
    validateOnBlur: true,
    validate,
  });

  const cartIcoOnClick = () => {
    formik.resetForm(formik.initialValues);
    formik.touched.phone = false;
    formik.touched.email = false;
    formik.touched.cashEmail = false;
    formik.touched.country = false;
    formik.touched.city = false;
    formik.touched.street = false;
    formik.touched.house = false;
    formik.touched.apartment = false;
    formik.touched.postcode = false;
    formik.touched.storeAddress = false;
    formik.touched.agreenment = false;
    formik.touched.paymentType = false;
    formik.touched.card = false;
    formik.touched.cardDate = false;
    formik.touched.cardCVV = false;
    if (isCartActive && isAnimationActive) {
      setIsAnimationActive(!isAnimationActive);
      setTimeout(() => {
        dispatch(paymentsReset());
        setIsCartActive(!isCartActive);
        enableBodyScroll();
      }, 1000);
    }
    if (!isCartActive && !isAnimationActive) {
      setIsCartActive(!isCartActive);
      setTimeout(() => setIsAnimationActive(!isAnimationActive));
      disableBodyScroll({ savePosition: true });
    }
  };

  const reset = () => {
    dispatch(paymentsReset());
  };

  return (
    <div
      data-test-id='app'
      className={classNames('app-wrapper', { 'app-wrapper-blur': products.isLoading || products.isError })}
    >
      <div aria-hidden onClick={cartIcoOnClick} className={classNames('shadow', { 'shadow-active': isCartActive })} />
      <Header cartIcoOnClick={cartIcoOnClick} />
      <Routes>
        <Route exact path='/' element={<Main products={products.data} />} />
        <Route exact path='women' element={<GenderPage dresses={products?.data?.women} productType='women' />} />
        <Route exact path='men' element={<GenderPage dresses={products?.data?.men} productType='men' />} />
        <Route
          exact
          path='women/:id'
          element={
            <ProductPage
              dresses={products?.data?.women}
              productType='women'
              isProductsError={!products.isError}
              isProductsLoading={!products.isLoading}
            />
          }
        />
        <Route
          exact
          path='men/:id'
          element={
            <ProductPage
              dresses={products?.data?.men}
              productType='men'
              isProductsError={!products.isError}
              isProductsLoading={!products.isLoading}
            />
          }
        />
      </Routes>
      <Modal isCartActive={isCartActive} isAnimationActive={isAnimationActive} formik={formik}>
        <Cart closeCart={cartIcoOnClick} formik={formik} reset={reset} />
      </Modal>
      <Loader isLoading={products.isLoading}>{products.isError ? <FaultOfLoad /> : <LoadingIco />}</Loader>
      <Footer />
    </div>
  );
};
