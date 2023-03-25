import React from 'react'
import { ddiDollar, top10 } from '../../assets/svg'
import styles from './BannerTop10.module.css'

const BannerTop10 = ({rank, name, fund}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.badge}>
          <div className={styles.badgeBg} dangerouslySetInnerHTML={{ __html: top10 }}></div>
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

export default BannerTop10