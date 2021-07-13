import React from 'react'
import styles from './index.module.css'

type Props = {
  code: string
}

export const ErrorView: React.FC<Props> = ({ code = '404' }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>{code}</h1>
    </div>
  )
}
