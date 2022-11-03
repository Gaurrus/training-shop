import { PropTypes } from 'prop-types';
import { TopBar } from './top-bar';
import { Nav } from './nav';

import styles from './header.module.scss';

export const Header = ({ cartIcoOnClick }) => (
  <header className={styles.header} data-test-id='header'>
    <TopBar />
    <Nav cartIcoOnClick={cartIcoOnClick} />
  </header>
);

Header.propTypes = {
  cartIcoOnClick: PropTypes.func.isRequired,
};
