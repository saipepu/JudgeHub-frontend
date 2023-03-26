import React, { useEffect, useState } from 'react'
import styles from '../styles/scoringPage.module.css'
import { ddiDollar, filterIcon } from '../assets/svg'
import bgEle1 from '../assets/bgEle1.png'
import TeamScore from '../Components/TeamScore/TeamScore'
import { data } from '../data/teamList'
import { NumberToString } from '../Functions/NumberToString'

const ScoringPage = () => {

  const [trigger, setTrigger] = useState(false);
  const [teamList, setTeamList] = useState([]);
  const [OrderSort, setOrderSort] = useState([]);
  const [FundSort, setFundSort] = useState([]);
  const [teamSort, setTeamSort] = useState(OrderSort);
  const [investorFund, setInvestorFund] = useState(2000000);

  useEffect(() => {
    console.log('getting')
    data(setTeamList);
  }, [trigger])
  let investorFundString = NumberToString(investorFund);

  useEffect(() => {

    let orderSort = [];
    let fundSort = [];
    for(let i=0; i<teamList?.length; i++) {
      let id = teamList[i].id;
      let name = teamList[i].name;
      let fundStr = teamList[i].amount.toString();
      let fund = parseInt(fundStr.split(',').join(''));
      fundSort.push({id: id, name: name, fund: fund})
      orderSort.push({id: id, name: name, fund: fund})
    }
    fundSort.sort((a,b) => b.fund - a.fund);
    setFundSort(fundSort);
    setOrderSort(orderSort);
    setTeamSort(fundSort);
  
  }, [teamList])

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
      setSortingMethod('Pitching Order');
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
                <TeamScore key={index} id={item.id} name={item.name} fund={item.fund} investorFund={investorFund} setInvestorFund={setInvestorFund}/>
              )
            })}
          </div>
        </div>  
      </div>
    </>
  )
}

export default ScoringPage