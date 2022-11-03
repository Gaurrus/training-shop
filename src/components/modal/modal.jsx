import { createPortal } from 'react-dom';
import classNames from 'classnames';
import styles from './modal.module.scss';

export const Modal = ({ isCartActive, children, isAnimationActive }) =>
  createPortal(
    isCartActive && (
      <div className={classNames(styles.modal, { [styles.modalActive]: isAnimationActive })}> {children}</div>
    ),
    document.getElementById('root')
  );
