import { FooterJoin } from './footer-join';
import { FooterNav } from './footer-nav';
import { Copyright } from './copyright/copyright';

import styles from './footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer} data-test-id='footer'>
    <FooterJoin />
    <FooterNav />
    <Copyright />
  </footer>
);
