import React from 'react'
import styles from './BannerTop1.module.css'
import { ddiDollar, top1 } from '../../assets/svg'

const BannerTop1 = ({rank, name, fund}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.badge}>
          <div className={styles.badgeBg} dangerouslySetInnerHTML={{ __html: top1 }}></div>
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

export default BannerTop1