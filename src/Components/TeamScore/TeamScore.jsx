import React from 'react'
import styles from './TeamScore.module.css'
import { ddiDollar, minusIcon, plusIcon } from '../../assets/svg'
import { NumberToString } from '../../Functions/NumberToString'

const TeamScore = ({ name, fund, investorFund }) => {

  console.log(fund);
  let fundString = NumberToString(fund);
  const handleIncrease = () => {
    console.log('increase')
  }
  const handleDecrease = () => {
    console.log('decrease')
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.teamName}>
          <p>{name}</p>
        </div>
        <div className={styles.fund_ct}>
          <p>{fundString}</p>
          <div dangerouslySetInnerHTML={{ __html: ddiDollar }} className={styles.ddi_dollar} ></div>
        </div>
        <div className={styles.button_gp}>
          <button
          onClick={() => handleIncrease()}
          className={styles.plus_button} dangerouslySetInnerHTML={{ __html: plusIcon }} style={investorFund < 5000 ? { background: 'var(--gray)'} : {}}></button>
          <button
          onClick={() => handleDecrease()}
          className={styles.minus_button} dangerouslySetInnerHTML={{ __html: minusIcon }}></button>
        </div>
      </div>
    </div>
  )
}

export default TeamScore