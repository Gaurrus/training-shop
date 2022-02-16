import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer';
import { Main } from '../main';
import { GenderPage } from '../pages/gender-page';
import { ProductPage } from '../pages/product-page/product-page';

import { store } from '../constants/store';

import realMarketJson from '../constants/real-market.json';

import './reset.scss';
import './App.scss';

export const App = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  useEffect(() => {
    document.title = 'CleverShop';
  }, []);
  return (
    <div data-test-id='app'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='women' element={<GenderPage dresses={realMarketJson.women} productType='women' />} />
        <Route exact path='men' element={<GenderPage dresses={realMarketJson.men} productType='men' />} />
        <Route exact path='women/:id' element={<ProductPage dresses={store.womensDress} productType='women' />} />
        <Route exact path='men/:id' element={<ProductPage dresses={store.mensDress} productType='men' />} />
      </Routes>
      <Footer />
    </div>
  );
};
