import React from 'react'
import styles from '../styles/scoringPage.module.css'
import { ddiDollar, filterIcon } from '../assets/svg'
import bgEle1 from '../assets/bgEle1.png'
import TeamScore from '../Components/TeamScore/TeamScore'

const ScoringPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.bgEle1}>
            <img src={bgEle1} alt="bgEle1" />
          </div>
          <div className={styles.bgEle1_1}>
            <img src={bgEle1} alt="bgEle1" />
          </div>
          <div className={styles.header}>
            {/* NAME */}
            <div className={styles.name_ct}>
              <p>Mr. Somchai Poonthong</p>
            </div>
            {/* AVAILABLE FUND */}
            <div className={styles.available_fund_ct}>
              <p className={styles.caption}>Available Funding</p>
              <div className={styles.fund}>
                <p className={styles.money}>2,000,000</p>
                <div className={styles.ddi_dollar} dangerouslySetInnerHTML={{ __html: ddiDollar}} ></div>
              </div>
            </div>
            {/* SORTING */}
            <div className={styles.sorting_ct}>
              <p className={styles.title}>DDI Investor Pitching</p>
              <div className={styles.sorting}><p>Sort By Amount</p><div dangerouslySetInnerHTML={{ __html: filterIcon }} className={styles.filterIcon}></div></div>
            </div>
          </div>


          {/* TEAMS */}
          <div className={styles.teams_ct}>
            {Array.apply(null, {length: 23}).map((item, index) => {
              return (
                <TeamScore key={index} />
              )
            })}
          </div>
        </div>  
      </div>
    </>
  )
}

export default ScoringPage