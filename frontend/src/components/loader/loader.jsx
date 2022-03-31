
import styles from './loader.module.scss';

const Loader = () => {
  return (
    <>
	
      <div className={styles.container}>
        <section>
          <div className={styles.loader + ' ' + styles.loader18}>
            <div className={styles.cssstar + ' ' + styles.star1}>1</div>
            <div className={styles.cssstar + ' ' + styles.star2}></div>
            <div className={styles.cssstar + ' ' + styles.star3}></div>
            <div className={styles.cssstar + ' ' + styles.star4}></div>
            <div className={styles.cssstar + ' ' + styles.star5}></div>
            <div className={styles.cssstar + ' ' + styles.star6}></div>
            <div className={styles.cssstar + ' ' + styles.star7}></div>
            <div className={styles.cssstar + ' ' + styles.star8}></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Loader;
