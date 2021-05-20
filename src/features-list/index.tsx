import Link from 'next/link'
import React from 'react'
import styles from './features-list.module.css'

export const FeaturesList = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <h3 className={styles.h3}>Build it in Wave</h3>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.imgWrapper}>
                <img src="/icons/command-line.png" className={styles.img} alt="" />
              </div>
              <p className={styles.desc}>Command Line</p>
              <div className={styles.listWrapper}>
                <Link href="/building-tools">
                  <a className={styles.feature}>Building Tools</a>
                </Link>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.imgWrapper}>
                <img src="/icons/cpu.png" className={styles.img} alt="" />
              </div>
              <p className={styles.desc}>Embedded</p>
              <div className={styles.listWrapper}>
                <Link href="/built-your-iot">
                  <a className={styles.feature}>Built your IoT</a>
                </Link>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.imgWrapper}>
                <img src="/icons/brain.png" className={styles.img} alt="" />
              </div>
              <p className={styles.desc}>AI</p>
              <div className={styles.listWrapper}>
                <Link href="/build-your-skynet">
                  <a className={styles.feature}>Build your SkyNet</a>
                </Link>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.imgWrapper}>
                <img src="/icons/science.png" className={styles.img} alt="" />
              </div>
              <p className={styles.desc}>Quantum Computing</p>
              <div className={styles.listWrapper}>
                <Link href="/hack-pentagon">
                  <a className={styles.feature}>Hack Pentagon</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
