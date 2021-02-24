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
                <img className={styles.img} alt="" />
              </div>
              <p className={styles.desc}>Command Line</p>
              <div className={styles.feature}>Building Tools</div>
            </div>
            <div className={styles.col}>
              <div className={styles.imgWrapper}>
                <img className={styles.img} alt="" />
              </div>
              <p className={styles.desc}>Embedded</p>
              <div className={styles.feature}>Built your IoT</div>
            </div>
            <div className={styles.col}>
              <div className={styles.imgWrapper}>
                <img className={styles.img} alt="" />
              </div>
              <p className={styles.desc}>AI</p>
              <div className={styles.feature}>Build your SkyNet</div>
            </div>
            <div className={styles.col}>
              <div className={styles.imgWrapper}>
                <img className={styles.img} alt="" />
              </div>
              <p className={styles.desc}>Quantum Computing</p>
              <div className={styles.feature}>Hack Pentagon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
