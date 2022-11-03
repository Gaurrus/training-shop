import styles from './loading-ico.module.scss';

export const LoadingIco = () => (
  <div className={styles.loader} data-test-id='loader'>
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>

    <div className={styles.covers}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
);
