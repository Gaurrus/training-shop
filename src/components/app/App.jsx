import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { Header } from '../header/header';
import { Footer } from '../footer';
import { Main } from '../main';
import { GenderPage } from '../pages/gender-page';
import { ProductPage } from '../pages/product-page/product-page';
import { Modal } from '../modal';
import { Cart } from '../cart';

import { realMarket } from '../constants/real-market';
import { getProducts } from '../store/products-state';

import './reset.scss';
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    document.title = 'CleverShop';
  }, []);
  return (
    <div data-test-id='app'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main realMarketJson={realMarket} />} />
        <Route exact path='women' element={<GenderPage dresses={realMarket.women} productType='women' />} />
        <Route exact path='men' element={<GenderPage dresses={realMarket.men} productType='men' />} />
        <Route exact path='women/:id' element={<ProductPage dresses={realMarket.women} productType='women' />} />
        <Route exact path='men/:id' element={<ProductPage dresses={realMarket.men} productType='men' />} />
      </Routes>
      <Modal>
        <Cart />
      </Modal>
      <Footer />
    </div>
  );
};
