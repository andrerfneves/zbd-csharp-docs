import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Arrow, Logo } from '../icons'
import styles from './header.module.css'

const ActiveLink = ({ href, children }) => {
  const { pathname } = useRouter()

  return (
    <Link
      href={href}
      className={`${styles.link} ${
        pathname.split('/')[1] === href.split('/')[1] ? styles.active : ''
      }`}
    >
      {children}
    </Link>
  )
}

export default () => {
  const [mobileNavShown, setMobileNavShown] = useState(false)

  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a
            href="https://zbd.gg"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.vercel}
          >
            <img src="/zbd-logo.svg" className={styles.zebedeeLogo} />
          </a>
        </div>

        <nav className={styles.desktopNav}>
          <ActiveLink href="/#setup">Installation</ActiveLink>
          <ActiveLink href="/#api">API</ActiveLink>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zebedeeio/zbd-csharp"
            className={styles.link}
          >
            GitHub
          </a>
        </nav>

        <div className={styles.rightNav}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dashboard.zebedee.io"
            className={styles.link}
          >
            ZBD Dev&nbsp;Dashboard →
          </a>
        </div>

        <span className={styles.toggle} onClick={toggle}>
          <Arrow height={14} width={26} />
        </span>
      </header>

      <nav
        className={`${styles.mobileNav} ${mobileNavShown ? styles.active : ''}`}
      >
        <Link href="/#setup">Installation</Link>
        <Link href="/#api">API</Link>
        <Link href="https://github.com/zebedeeio/zbd-csharp" target="_blank">
          GitHub: zbd-csharp
        </Link>
        <Link href="https://dashboard.zebedee.io" target="_blank">
          ZBD Dev Dashboard
        </Link>
      </nav>
    </>
  )
}
