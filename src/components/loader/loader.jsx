import { createPortal } from 'react-dom';
import classNames from 'classnames';

import styles from './loader.module.scss';

export const Loader = (props) =>
  createPortal(
    <div className={classNames(styles.loader, { [styles.loaderActive]: props.isLoading })}> {props.children}</div>,
    document.getElementById('root')
  );
