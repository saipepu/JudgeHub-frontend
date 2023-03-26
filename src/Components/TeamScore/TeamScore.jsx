import React, { useEffect, useState } from 'react'
import styles from './TeamScore.module.css'
import { ddiDollar, minusIcon, plusIcon } from '../../assets/svg'
import { NumberToString } from '../../Functions/NumberToString'
import Increase from '../../api/Increase'
import Decrease from '../../api/Decrease'

const TeamScore = ({ id, name, fund, investorFund, setInvestorFund }) => {

  const [response, setResponse] = useState();
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    if(investorFund >= 5000) {
      console.log(fund , 5000);
      setCount((count) => count + 5000)
      setInvestorFund(investorFund - 5000)
      Increase({ amount: fund + 5000, id: id}, setResponse)
    }
  }
  const handleDecrease = () => {
    if(fund > 0) {
      console.log('decrease')
      setCount((count) => count - 5000)
      setInvestorFund(investorFund + 5000);
      Decrease({ amount: fund - 5000, id: id}, setResponse)
    }
  }

  useEffect(() => {
    if(response?.success) {
      console.log('Success')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.teamName}>
          <p>{name}</p>
        </div>
        <div className={styles.fund_ct}>
          <p>{NumberToString(count)}</p>
          <div dangerouslySetInnerHTML={{ __html: ddiDollar }} className={styles.ddi_dollar} ></div>
        </div>
        <div className={styles.button_gp}>
          <button
          onClick={() => handleIncrease()}
          className={styles.plus_button} dangerouslySetInnerHTML={{ __html: plusIcon }} style={investorFund < 5000 ? { background: 'var(--gray)'} : {}}></button>
          <button
          onClick={() => handleDecrease()}
          className={styles.minus_button} dangerouslySetInnerHTML={{ __html: minusIcon }} style={investorFund === 0  ? { background: 'var(--gray)'} : {}}></button>
        </div>
      </div>
    </div>
  )
}

export default TeamScore