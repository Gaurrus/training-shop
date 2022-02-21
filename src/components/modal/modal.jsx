import { createPortal } from 'react-dom';
import syles from './modal.module.scss';

export const Modal = (props) =>
  createPortal(<div className={syles.modal}>{props.children}</div>, document.getElementById('root'));
