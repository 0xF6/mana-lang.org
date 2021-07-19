import Link from 'next/link'
import React from 'react'
import styles from './footer.module.css'

const items = [
  {
    title: 'documentation',
    links: [
      { link: 'https://docs.mana-lang.org/docs/intro', title: 'Getting Started', isExternal: true },
      { link: 'https://docs.mana-lang.org/docs/runtime/index', title: 'API', isExternal: true },
      { link: 'https://docs.mana-lang.org/docs/guides/the-basis', title: 'Overviews/Guides', isExternal: true },
      { link: 'https://docs.mana-lang.org/docs/intro', title: 'Language Specification', isExternal: true },
    ],
  },
  {
    title: 'download',
    links: [
      { link: 'https://github.com/0xF6/mana_lang/releases', title: 'Current Version', isExternal: true },
      { link: 'https://github.com/0xF6/mana_lang/releases', title: 'All versions', isExternal: true },
    ],
  },
  {
    title: 'social',
    links: [{ link: 'https://github.com/0xF6/mana_lang', title: 'Github', isExternal: true }],
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
