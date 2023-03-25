import React, { useState } from 'react'
import styles from '../styles/scoringPage.module.css'
import { ddiDollar, filterIcon } from '../assets/svg'
import bgEle1 from '../assets/bgEle1.png'
import TeamScore from '../Components/TeamScore/TeamScore'
import { teamList } from '../data/teamList'
import { NumberToString } from '../Functions/NumberToString'

const ScoringPage = () => {

  let investorFund = 2000000;
  let investorFundString = NumberToString(investorFund);
  console.log(investorFundString);

  let OrderSort = [];
  let FundSort = [];
  for(let i=0; i<teamList.length; i++) {
    let name = teamList[i].name;
    let fund = parseInt(teamList[i].fund.split(',').join(''));
    FundSort.push({name: name, fund: fund})
    OrderSort.push({name: name, fund: fund})
  }
  FundSort.sort((a,b) => b.fund - a.fund);

  const [teamSort, setTeamSort] = useState(OrderSort);
  const [sortingMethod, setSortingMethod] = useState('Funding')
  const [change, setChange] = useState(false);

  const handleChangeSort = (action) => {
    console.log(action);
    if(action === false){
      setChange(false);
      setTeamSort(OrderSort);
      setSortingMethod('Funding');
    } else {
      setChange(true);
      setTeamSort(FundSort);
      setSortingMethod('Order');
    }
  }

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
          <div className={styles.header_ct}>
            <div className={styles.sorting_ct}>
                <p className={styles.title}>DDI Investor Pitching</p>
                <div className={styles.sorting} onClick={() => handleChangeSort(!change)}><p>Sort By {sortingMethod}</p><div dangerouslySetInnerHTML={{ __html: filterIcon }} className={styles.filterIcon}></div></div>
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
                  <p className={styles.money}>{investorFundString}</p>
                  <div className={styles.ddi_dollar} dangerouslySetInnerHTML={{ __html: ddiDollar}} ></div>
                </div>
                <div className={styles.sorting} onClick={() => handleChangeSort(!change)}><p>Sort By {sortingMethod}</p><div dangerouslySetInnerHTML={{ __html: filterIcon }} className={styles.filterIcon}></div></div>
              </div>
              {/* SORTING */}
            </div>
          </div>

          {/* TEAMS */}
          <div className={styles.teams_ct}>
            {teamSort.map((item, index) => {
              return (
                <TeamScore key={index} name={item.name} fund={item.fund} investorFund={investorFund}/>
              )
            })}
          </div>
        </div>  
      </div>
    </>
  )
}

export default ScoringPage