import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <h1>데브 퀴즈</h1>
      <footer className={styles.footer}></footer>
    </div>
  );
}
