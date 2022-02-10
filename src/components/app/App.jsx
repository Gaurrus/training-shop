import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer';
import { Main } from '../main';
import { GenderPage } from '../pages/gender-page';
import { ProductPage } from '../pages/product-page/product-page';

import { store } from '../constants/store';

import './reset.css';
import './App.css';

export const App = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  useEffect(() => {
    document.title = 'MiSto';
  }, []);
  return (
    <div data-test-id='app'>
      <Header />
      <Routes>
        <Route exact path='/training-shop' element={<Main />} />
        <Route exact path='women' element={<GenderPage dresses={store.womensDress} productType='women' />} />
        <Route exact path='men' element={<GenderPage dresses={store.mensDress} productType='men' />} />
        <Route exact path='women/:id' element={<ProductPage dresses={store.womensDress} productType='women' />} />
        <Route exact path='men/:id' element={<ProductPage dresses={store.mensDress} productType='men' />} />
      </Routes>
      <Footer />
    </div>
  );
};
