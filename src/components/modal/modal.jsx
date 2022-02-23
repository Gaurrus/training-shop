import { createPortal } from 'react-dom';
import classNames from 'classnames';
import styles from './modal.module.scss';

export const Modal = (props) =>
  createPortal(
    <div className={classNames(styles.modal, { [styles.modalActive]: props.isCartActive })}> {props.children}</div>,
    document.getElementById('root')
  );
