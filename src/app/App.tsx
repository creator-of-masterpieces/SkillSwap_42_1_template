import styles from "./styles/app.module.css";

type AppProps = {
  title?: string;
};

export default function App({ title = "SkillSwap" }: AppProps) {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <nav className={styles.nav} aria-label="main navigation">
          <a href="#" className={styles.navLink}>
            Home
          </a>
          <a href="#" className={styles.navLink}>
            Profile
          </a>
        </nav>
      </header>

      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} SkillSwap</span>
      </footer>
    </div>
  );
}
