import React from 'react'
import styles from './TeamScore.module.css'
import { ddiDollar, minusIcon, plusIcon } from '../../assets/svg'

const TeamScore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.teamName}>
          <p>Let's Plant</p>
        </div>
        <div className={styles.fund_ct}>
          <p>10,000,000</p>
          <div dangerouslySetInnerHTML={{ __html: ddiDollar }} className={styles.ddi_dollar} ></div>
        </div>
        <div className={styles.button_gp}>
          <button className={styles.plus_button} dangerouslySetInnerHTML={{ __html: plusIcon }}></button>
          <button className={styles.minus_button} dangerouslySetInnerHTML={{ __html: minusIcon }}></button>
        </div>
      </div>
    </div>
  )
}

export default TeamScore