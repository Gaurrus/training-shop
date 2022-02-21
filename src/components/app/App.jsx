import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Header } from '../header/header';
import { Footer } from '../footer';
import { Main } from '../main';
import { GenderPage } from '../pages/gender-page';
import { ProductPage } from '../pages/product-page';
import { Modal } from '../modal';
import { Cart } from '../cart';

import { realMarket } from '../constants/real-market';
import { getProductsRequest } from '../store/products-state';

import './reset.scss';
import './App.scss';
import { productsSelector } from '../../selectors';

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

  console.log(products);

  return (
    <div data-test-id='app'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main products={products.data} />} />
        <Route exact path='women' element={<GenderPage dresses={products?.data?.women} productType='women' />} />
        <Route exact path='men' element={<GenderPage dresses={products?.data?.men} productType='men' />} />
        <Route exact path='women/:id' element={<ProductPage dresses={products?.data?.women} productType='women' />} />
        <Route exact path='men/:id' element={<ProductPage dresses={products?.data?.men} productType='men' />} />
      </Routes>
      <Modal>
        <Cart />
      </Modal>
      <Footer />
    </div>
  );
};
