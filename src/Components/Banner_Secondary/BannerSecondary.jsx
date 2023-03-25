import React from 'react'
import styles from './BannerSecondary.module.css'
import { defaultBadge, ddiDollar } from '../../assets/svg'

const BannerSecondary = ({rank, name, fund}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.badge}>
          <div className={styles.badgeBg} dangerouslySetInnerHTML={{ __html: defaultBadge }}></div>
          <p className={styles.rank}>{rank}</p>
        </div>
        <div className={styles.teamName}>
          <p>{name}</p>
        </div>
        <div className={styles.teamFund}>
          <p>{fund}</p>
          <div className={styles.ddi_dollar} dangerouslySetInnerHTML={{ __html: ddiDollar }}></div>
        </div>
      </div>
    </div>
  )
}

export default BannerSecondary