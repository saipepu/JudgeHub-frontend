import React, { useEffect, useState } from "react";
import styles from "../styles/scoringPage.module.css";
import { ddiDollar } from "../assets/svg";
import bgEle1 from "../assets/bgEle1.png";
import TeamScore from "../Components/TeamScore/TeamScore";
import { NumberToString } from "../Functions/NumberToString";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getJudge } from "../api/getOneJudge";

const ScoringPage = () => {

  const navigation = useNavigate();
  const { id } = useParams();
  const [judge, setJudge] = useState();
  const [investorFund, setInvestorFund] = useState("");
  const [response, setResponse] = useState();
  const [teamList, setTeamList] = useState([]);
  const [teamSort, setTeamSort] = useState();
  const [trigger, setTrigger] = useState(true);
  const [sortMethod, setSortingMethod] = useState(localStorage.getItem('ddi-team-sorting-order'))

  useEffect(() => {
    getJudge(id, setResponse);
  }, [id, trigger])
  
  useEffect(() => {
    if(response?.success) {
      setJudge(response.message);
      setTeamList(response.message.teamList);
      handleChangeSort(localStorage.getItem('ddi-team-sorting-order'))
    }
  }, [response])

  useEffect(() => {
    if(judge){
      console.log(judge);
      setInvestorFund(judge?.totalFund)
    } else {
      setInvestorFund('0')
    }
  }, [judge])

  const handleChangeSort = (action) => {
    let fundSort = [];
    let orderSort = [];
    for(let i=0; i<teamList?.length; i++) {
      let name = teamList[i].name;
      let fundStr = teamList[i].fund?.toString();
      let fund = parseInt(fundStr.split(',').join(''));
      fundSort.push({name: name, fund: fund})
      fundSort.sort((a,b) => b.fund - a.fund);
      orderSort.push({name: name, fund: fund})
      console.log(fundSort)
      console.log(orderSort)
    }
    if(action === 'Pitching Order') {
      localStorage.setItem('ddi-team-sorting-order', 'Pitching Order')
      setSortingMethod('Pitching Order');
      setTeamSort(orderSort)
    } else {
      localStorage.setItem('ddi-team-sorting-order', 'Funding')
      setSortingMethod('Funding');
      setTeamSort(fundSort)
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
                    <div className={styles.sorting}>
                      <div 
                        className={styles.sort_by_fund}
                        onClick={() => handleChangeSort('Funding')}
                        style={ sortMethod === 'Funding' ? { background: 'var(--ddi-gradient-r', color: 'white'} : {background: 'white', color: 'black'}}>
                        Sort By Fund
                      </div>
                      <div
                        className={styles.sort_by_pitching}
                        onClick={() => handleChangeSort('Pitching Order')}
                        style={ sortMethod === 'Pitching Order' ? { background: 'var(--ddi-gradient-r', color: 'white'} : {background: 'white', color: 'black'}}
                      >
                        Sort By Pitching Order
                      </div>
                    </div>
                </div>
                <div className={styles.header}>
                  {/* NAME */}
                  <div className={styles.name_ct}>
                      <p>{judge?.name}</p>
                  </div>
                  {/* AVAILABLE FUND */}
                  <div className={styles.available_fund_ct}>
                      <p className={styles.caption}>Available Funding</p>
                      <div className={styles.fund}>
                      <p className={styles.money}>{NumberToString(investorFund)}</p>
                      <div className={styles.ddi_dollar} dangerouslySetInnerHTML={{ __html: ddiDollar}} ></div>
                      </div>
                  </div>
                  <div className={styles.sorting}>
                    <div 
                      className={styles.sort_by_fund}
                      onClick={() => handleChangeSort('Funding')}
                      style={ sortMethod === 'Funding' ? { background: 'var(--ddi-gradient-r', color: 'white'} : {background: 'white', color: 'black'}}>
                      Sort By Fund
                    </div>
                    <div
                      className={styles.sort_by_pitching}
                      onClick={() => handleChangeSort('Pitching Order')}
                      style={ sortMethod === 'Pitching Order' ? { background: 'var(--ddi-gradient-r', color: 'white'} : {background: 'white', color: 'black'}}
                    >
                      Sort By Pitching Order
                    </div>
                  </div>
                  {/* SORTING */}
                </div>
            </div>

            {/* TEAMS */}
            <div className={styles.teams_ct}>
                {teamSort?.map((item, index) => {
                return (
                    <TeamScore key={index} id={judge._id} name={item.name} fund={item.fund} investorFund={investorFund} setInvestorFund={setInvestorFund} trigger={trigger} setTrigger={setTrigger} />
                )
                })}
            </div>
            </div>  
            </div>
        </>
    );
};

export default ScoringPage;
