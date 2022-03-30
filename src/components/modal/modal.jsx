import { createPortal } from 'react-dom';
import classNames from 'classnames';
import styles from './modal.module.scss';

export const Modal = ({ isCartActive, children }) =>
  createPortal(
    isCartActive && <div className={classNames(styles.modal, { [styles.modalActive]: isCartActive })}> {children}</div>,
    document.getElementById('root')
  );
