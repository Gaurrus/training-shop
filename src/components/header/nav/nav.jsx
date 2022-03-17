import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import { disableBodyScroll, enableBodyScroll } from '../../utils/scroll-lock';

import search from './assets/search-nav.svg';
import globe from './assets/globe-nav.svg';
import login from './assets/login-nav.svg';
import cartImage from './assets/shopping-bag-nav.svg';
import logo from './assets/CleverShop.svg';

import { cartSelector } from '../../../selectors';

import styles from './nav.module.scss';
import './burger.scss';

const navList = [
  {
    id: '01',
    path: 'about',
    title: 'About Us',
  },
  {
    id: '02',
    path: 'women',
    title: 'Women',
  },
  {
    id: '03',
    path: 'men',
    title: 'Men',
  },
  {
    id: '04',
    path: 'beauty',
    title: 'Beauty',
  },
  {
    id: '05',
    path: 'accessories',
    title: 'Accessories',
  },
  {
    id: '06',
    path: 'blog',
    title: 'Blog',
  },
  {
    id: '07',
    path: 'contact',
    title: 'Contact',
  },
];

export const Nav = ({ cartIcoOnClick }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const cartState = useSelector(cartSelector);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.nav}>
        <NavLink to='/' className={styles.navLink} data-test-id='header-logo-link'>
          <img src={logo} alt='logo' />
        </NavLink>
        <div className={styles.itemBlock}>
          <ul className={classNames(styles.navList, { 'active-list': isBurgerActive })} data-test-id='burger-menu'>
            {navList.map((navItem) => (
              <li key={navItem.path}>
                <NavLink
                  data-test-id={`menu-link-${navItem.path}`}
                  to={`/${navItem.path}`}
                  className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
                  onClick={() => {
                    setIsBurgerActive(false);
                    enableBodyScroll();
                  }}
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.itemBlock}>
          <img src={search} alt='Search' />
          <img src={globe} alt='World' />
          <img src={login} alt='LogIn' />
          <div
            data-test-id='cart-button'
            className={classNames(styles.cart)}
            aria-hidden
            onClick={() => {
              cartIcoOnClick();
            }}
          >
            {cartState.cart.length ? <div className={classNames(styles.cartIco)}>{cartState.cart.length}</div> : null}
            <img src={cartImage} alt='Cart' />
          </div>
          <div
            className={classNames(styles.burger, { activeBurger: isBurgerActive })}
            data-test-id='burger-menu-btn'
            aria-hidden
            onClick={() => {
              setIsBurgerActive(!isBurgerActive);
              disableBodyScroll({ savePosition: true });
            }}
          >
            <div className={classNames(styles.burgerLine, 'topLine')} />
            <div className={classNames(styles.burgerLine, 'middleLine')} />
            <div className={classNames(styles.burgerLine, 'bottomLine')} />
          </div>
        </div>
      </div>
      <div
        className={classNames('shadow', { 'shadow-active': isBurgerActive })}
        aria-hidden
        onClick={() => {
          setIsBurgerActive(false);
          enableBodyScroll();
        }}
      />
      <div className={styles.line} />
    </nav>
  );
};

Nav.propTypes = {
  cartIcoOnClick: PropTypes.func.isRequired,
};
