import { TopBar } from './top-bar';
import { Nav } from './nav';

import styles from './header.module.css';

export const Header = () => (
  <header className={styles.header} data-test-id='header'>
    <TopBar />
    <Nav />
  </header>
);
