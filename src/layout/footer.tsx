import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

const items = [
  {
    title: 'documentation',
    links: [
      { link: '/', title: 'Getting Started', isExternal: false },
      { link: '/', title: 'API', isExternal: false },
      { link: '/', title: 'Overviews/Guides', isExternal: false },
      { link: '/', title: 'Language Specification', isExternal: false },
    ],
  },
  {
    title: 'download',
    links: [
      { link: '/', title: 'Current Version', isExternal: false },
      { link: '/', title: 'All versions', isExternal: false },
    ],
  },
  {
    title: 'social',
    links: [{ link: '/', title: 'Github', isExternal: true }],
  },
]

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {items.map((item) => (
          <div className={styles.footerItem} key={item.title}>
            <p className={styles.footerItemTitle}>{item.title}</p>
            {item.links.map((itemLink) =>
              itemLink.isExternal ? (
                <a
                  key={itemLink.title}
                  href={itemLink.link}
                  className={styles.footerItemLink}
                >
                  {itemLink.title}
                </a>
              ) : (
                <Link key={itemLink.title} href={itemLink.link}>
                  <a className={styles.footerItemLink}>{itemLink.title}</a>
                </Link>
              ),
            )}
          </div>
        ))}
      </div>
    </footer>
  )
}
