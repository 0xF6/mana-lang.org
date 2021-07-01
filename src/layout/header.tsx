import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'
import _Hex1 from './hex1.svg'
import _Hex2 from './hex2.svg'
import { icon } from './icon'
import _Label from './label.svg'
import _Menu from './menu.svg'

const Hex1: any = _Hex1
const Hex2: any = _Hex2
const Label: any = _Label
const Menu: any = _Menu

export const Header = () => {
  return (
    <>
      <Menu data-name="menu" className={styles.menu} />
      <nav className={styles.menuBlock}>
        <Link href="/install">
          <a className={styles.menuItem}>Install</a>
        </Link>
        <Link href="/learn">
          <a className={styles.menuItem}>Learn</a>
        </Link>
        <Link href="/tools">
          <a className={styles.menuItem}>Tools</a>
        </Link>
      </nav>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={classnames(styles.logo, 'blur')}>
            <Link href="/">
              <a title="home" className={styles.imgWrapper}>
                <img src={icon} className={styles.img} />
              </a>
            </Link>
          </div>
          <div className={styles.row}>
            <div className={styles.titles}>
              <h1 className={styles.h1}>Mana Lang</h1>
              <h2 className={styles.h2}>with Ishtar VM</h2>
            </div>
            <div className={styles.btnWrapper}>
              <Hex1
                className={classnames(styles.rightHex, styles.hex)}
                data-name="hex1"
              />
              <Hex2
                className={classnames(styles.leftHex, styles.hex)}
                data-name="hex2"
              />
              <Label className={classnames(styles.label)} data-name="label" />
              <div className={styles.version}>
                <a href="https://github.com">
                  latest release: <b>1488</b>
                </a>
              </div>
              <Link href="/">
                <a title="Get started" className={classnames(styles.btn)}>
                  Get started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.divider} />
    </>
  )
}
