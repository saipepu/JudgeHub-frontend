import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'
import ScoringPage from './Pages/ScoringPage'
import Leaderboard from './Pages/Leaderboard'
import HistoryLog from './Pages/Histroy'

const App = () => {

  if(!localStorage.getItem('ddi-team-sorting-order')) {
    localStorage.setItem('ddi-team-sorting-order', 'Pitching Order')
  }

  return (
    <>
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/scoringPage/:id" element={<ScoringPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/historylog" element={<HistoryLog />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App