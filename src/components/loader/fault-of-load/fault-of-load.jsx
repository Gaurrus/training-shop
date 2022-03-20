import styles from './fault-of-load.module.scss';

export const FaultOfLoad = () => (
  <div data-test-id='error' className={styles.fault}>
    Ошибка загрузки данных!
  </div>
);
