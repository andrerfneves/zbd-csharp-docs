import styles from './footer.module.css'

export default () => (
  <footer className={styles.root}>
    <nav className={styles.content}>
      <div className={styles.left}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/zebedeeio/zbd-node/releases"
        >
          Changelog
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/zebedeeio/zbd-node"
        >
          GitHub
        </a>
        <span>
          License:&nbsp;<b>MIT</b>
        </span>
      </div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.logo}
        href="https://vercel.com"
      >
        ▲
      </a>
    </nav>
  </footer>
)
