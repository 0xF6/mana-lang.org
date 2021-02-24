import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'

/* eslint-disable jsx-a11y/anchor-is-valid */
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Link href="/">
            <a className={styles.imgWrapper}>
              <img alt="" className={styles.img} />
            </a>
          </Link>
          <nav className={styles.nav}>
            <Link href="/install">
              <a className={styles.navlink}>Install</a>
            </Link>
            <Link href="/learn">
              <a className={styles.navlink}>Learn</a>
            </Link>
            <Link href="/tools">
              <a className={styles.navlink}>Tools</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
