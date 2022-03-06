/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { Header } from '../header/header';
import { Footer } from '../footer';
import { Main } from '../main';
import { GenderPage } from '../pages/gender-page';
import { ProductPage } from '../pages/product-page';
import { Modal } from '../modal';
import { Cart } from '../cart';

import { productsSelector } from '../../selectors';

import { getProductsRequest } from '../store/products-state';

import './reset.scss';
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  useEffect(() => {
    document.title = 'CleverShop';
  }, []);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, []);

  const products = useSelector(productsSelector);

  const [isCartActive, setIsCartActive] = useState(false);

  const cartIcoOnClick = () => {
    if (isCartActive) {
      setIsCartActive(!isCartActive);
      document.body.style.overflow = null;
    } else {
      setIsCartActive(!isCartActive);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div data-test-id='app'>
      <div aria-hidden onClick={cartIcoOnClick} className={classNames('shadow', { 'shadow-active': isCartActive })} />
      <Header cartIcoOnClick={cartIcoOnClick} />
      <Routes>
        <Route exact path='/' element={<Main products={products.data} />} />
        <Route exact path='women' element={<GenderPage dresses={products?.data?.women} productType='women' />} />
        <Route exact path='men' element={<GenderPage dresses={products?.data?.men} productType='men' />} />
        <Route exact path='women/:id' element={<ProductPage dresses={products?.data?.women} productType='women' />} />
        <Route exact path='men/:id' element={<ProductPage dresses={products?.data?.men} productType='men' />} />
      </Routes>
      <Modal isCartActive={isCartActive}>
        <Cart closeCart={cartIcoOnClick} />
      </Modal>
      <Footer />
    </div>
  );
};
