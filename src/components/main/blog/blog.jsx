import { blogStore } from '../../constants/blog';

import styles from './blog.module.scss';

export const Blog = () => (
  <div className={styles.wrapper}>
    <div id='blog' className={styles.blog}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>LATEST FROM BLOG</h2>
        <a href='#!' className={styles.seeAll}>
          SEE ALL
        </a>
      </div>
      <div className={styles.blogItems}>
        {blogStore.map((item) => (
          <div className={styles.item} key={item.id}>
            <img src={item.img} alt='card-img' className={styles.img} />
            <div className={styles.itemTitleBlock}>
              <h2 className={styles.itemTitle}>{item.title}</h2>
              <p className={styles.subtitle}>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
