import { NavLink } from 'react-router-dom';

import location from './assets/location-marker-footer.svg';
import phone from './assets/phone-footer.svg';
import clock from './assets/clock-footer.svg';
import mail from './assets/mail-footer.svg';

import styles from './footer-nav.module.scss';

const footerNavListFirst = [
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
];

const footerNavListSecond = [
  {
    id: '05',
    path: 'about',
    title: 'About Us',
  },
  {
    id: '06',
    path: 'contact',
    title: 'Contact Us',
  },
  {
    id: '07',
    path: 'blog',
    title: 'Blog',
  },
  {
    id: '08',
    path: 'faqs',
    title: 'FAQs',
  },
];

const usefulLinks = [
  {
    id: '09',
    path: 'terms-and-conditions',
    title: 'Terms & Conditions',
  },
  {
    id: '10',
    path: 'returns-and-exchanges',
    title: 'Returns & Exchanges',
  },
  {
    id: '11',
    path: 'shipping-and-delivery',
    title: 'Shipping & Delivery',
  },
  {
    id: '12',
    path: 'privacy-policy',
    title: 'Privacy Policy',
  },
];

export const FooterNav = () => (
  <div className={styles.wrapper}>
    <div className={styles.footerNav}>
      <div className={styles.footerItem}>
        <h3 className={styles.title}>CATEGORIES</h3>
        <ul className={styles.list}>
          {footerNavListFirst.map((item) => (
            <li key={item.path}>
              <NavLink to={`${item.path}`} data-test-id={`footer-nav-link-${item.path}`}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerItem}>
        <h3 className={styles.title}>INFORMATION</h3>
        <ul className={styles.list}>
          {footerNavListSecond.map((item) => (
            <li key={item.path}>
              <NavLink to={`${item.path}`} data-test-id={`footer-nav-link-${item.path}`}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerItem}>
        <h3 className={styles.title}>USEFUL LINKS</h3>
        <ul className={styles.list}>
          {usefulLinks.map((item) => (
            <li key={item.path}>
              <NavLink to={`${item.path}`} data-test-id={`footer-nav-link-${item.path}`}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footerItem}>
        <h3 className={styles.title}>CONTACT US</h3>
        <ul className={styles.list}>
          <li key='location-ico'>
            <img src={location} alt='location-ico' />
            Belarus, Gomel, Lange 17
          </li>
          <li key='phone-ico'>
            <img src={phone} alt='phone-ico' />
            +375 29 100 20 30
          </li>
          <li key='clock-ico'>
            <img src={clock} alt='clock-ico' />
            All week 24/7
          </li>
          <li key='mail-ico'>
            <img src={mail} alt='mail-ico' />
            info@clevertec.ru
          </li>
        </ul>
      </div>
    </div>
  </div>
);
