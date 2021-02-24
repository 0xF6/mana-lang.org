import Link from 'next/link'
import React from 'react'
import styles from './banner.module.css'

type Props = {
  version: string
}

/* eslint-disable jsx-a11y/anchor-is-valid */
export const Banner: React.FC<Props> = ({ version }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.row}>
            <div className={styles.left}>
              <h1 className={styles.h1}>Wave Lang</h1>
              <h2 className={styles.h2}>with Insomnia VM</h2>
            </div>
            <div className={styles.right}>
              <Link href="/get-started">
                <a className={styles.button}>Get started</a>
              </Link>
              <a
                className={styles.release}
                href="https://github.com/0xF6/wave_lang"
              >
                latest release: <b>{version}</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
