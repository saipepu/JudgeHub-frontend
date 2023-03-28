import React, { useEffect, useState } from 'react'
import styles from './TeamScore.module.css'
import { ddiDollar, minusIcon, plusIcon } from '../../assets/svg'
import { NumberToString } from '../../Functions/NumberToString'
import Increase from "../../api/Increase";
import Decrease from "../../api/Decrease";
import { Oval } from 'react-loader-spinner';
import { getJudge } from '../../api/getOneJudge';
import { updateJudgeFund } from '../../api/updateJudgeFund';
import { updateTotalTeamsFund } from '../../api/updateTotalTeamsFund';

const TeamScore = ({ loading, setLoading, id, name, fund, investorFund, setInvestorFund, trigger, setTrigger }) => {

  const [response, setResponse] = useState();
  const [amount, setAmount] = useState(fund);

  useEffect(() => {
    setAmount(fund);
  }, [fund])

  useEffect(() => {
    if(response?.success) {
      setInvestorFund(response.judge.totalBank);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  const handleIncrease = () => {
    if(investorFund >= 500000 && !loading) {
      console.log(amount + 500000, "-", investorFund - 500000);
      updateJudgeFund(id,{ teamName: name, fund: amount + 500000, totalFund: investorFund - 500000 })
      // updateTotalTeamsFund({ name: name, action: 'increase'})
      setAmount(amount + 500000);
      setInvestorFund(investorFund - 500000);
      setTrigger(!trigger);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('do again now')
    }, 1000)
  }

  const handleDecrease = () => {
    if(amount > 0 && !loading) {
      console.log(amount - 500000, "-", investorFund + 500000);
      updateJudgeFund(id, { teamName: name, fund: amount - 500000, totalFund: investorFund + 500000 })
      // updateTotalTeamsFund({ name: name, action: 'decrease'})
      setAmount(amount - 500000);
      setInvestorFund(investorFund + 500000);
      setTrigger(!trigger);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('do again now')
    }, 1000)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.teamName}>
          <p>{name}</p>
        </div>
        <div className={styles.fund_ct}>
          <p>{NumberToString(amount)}</p>
          <div dangerouslySetInnerHTML={{ __html: ddiDollar }} className={styles.ddi_dollar} ></div>
        </div>
        <div className={styles.button_gp}>
          {!loading ? (
            <button
            onClick={() => handleIncrease()}
            className={styles.plus_button} dangerouslySetInnerHTML={{ __html: plusIcon }} style={investorFund < 500000 ? { background: 'var(--gray)'} : {}}></button>     
          ) : (
            <button className={styles.plus_button}>
              <Oval
                width="14"
                height="14"
                strokeWidth={5}
                strokeWidthSecondary={8}
                color="white"
                secondaryColor="white"
              />
            </button>
          )}
          {!loading ? (
            <button
            onClick={() => handleDecrease()}
            className={styles.minus_button} dangerouslySetInnerHTML={{ __html: minusIcon }}></button>
          ) : (
            <button className={styles.minus_button}>
              <Oval
                width="14"
                height="14"
                strokeWidth={5}
                strokeWidthSecondary={8}
                color="white"
                secondaryColor="white"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamScore