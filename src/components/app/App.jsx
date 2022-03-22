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
import { Loader } from '../loader';

import { disableBodyScroll, enableBodyScroll } from '../utils/scroll-lock';

import { productsSelector } from '../../selectors';
import { LoadingIco } from '../loader/loading-ico';

import { getProductsRequest } from '../store/products-state';

import './reset.scss';
import './App.scss';
import { FaultOfLoad } from '../loader/fault-of-load';

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

  const cartIcoOnClick = () => {
    if (isCartActive) {
      setIsCartActive(!isCartActive);
      enableBodyScroll();
    } else {
      setIsCartActive(!isCartActive);
      disableBodyScroll({ savePosition: true });
    }
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
              isError={!products.isError}
              isLoading={!products.isLoading}
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
              isError={!products.isError}
              isLoading={!products.isLoading}
            />
          }
        />
      </Routes>
      <Modal isCartActive={isCartActive}>
        <Cart closeCart={cartIcoOnClick} />
      </Modal>
      <Loader isLoading={products.isLoading}>{products.isError ? <FaultOfLoad /> : <LoadingIco />}</Loader>
      <Footer />
    </div>
  );
};
