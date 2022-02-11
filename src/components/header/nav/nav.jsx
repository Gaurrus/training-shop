import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { disableBodyScroll, enableBodyScroll } from '../../utils/scroll-lock';

import search from './assets/search-nav.svg';
import globe from './assets/globe-nav.svg';
import login from './assets/login-nav.svg';
import cart from './assets/shopping-bag-nav.svg';
import logo from './assets/CleverShop.svg';

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

export const Nav = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  return (
    <nav className={styles.wrapper}>
      <div className={styles.nav}>
        <NavLink to='/' className={styles.navLink} data-test-id='header-logo-link'>
          <img src={logo} alt='logo' />
        </NavLink>
        <div className={styles.itemBlock}>
          <ul className={classNames(styles.navList, { 'active-list': isBurgerActive })} data-test-id='menu'>
            {navList.map((navItem) => (
              <li>
                <NavLink
                  key={navItem.id}
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
          <img src={cart} alt='Cart' />
          <div
            className={classNames(styles.burger, { activeBurger: isBurgerActive })}
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
