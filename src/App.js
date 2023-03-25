import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'
import ScoringPage from './Pages/ScoringPage'
import Leaderboard from './Pages/Leaderboard'

const App = () => {
  return (
    <>
      <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/scoringPage" element={<ScoringPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App