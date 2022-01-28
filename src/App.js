import React from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home'
import ChooseClient from './components/common/ChooseClient'
import RevAndRoas from './components/chartPages/RevAndRoas'
import CpcPage from './components/chartPages/CpcPage'
import ImpsPage from './components/chartPages/ImpsPage'
import Revenue from './components/chartPages/Revenue'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/api/clients/')
        console.log({ res })
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  })

  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client-choice" element={<ChooseClient />} />
        <Route path="/clients/:clientId/roas" element={<RevAndRoas />} />
        <Route path="/clients/:clientId/cpc" element={<CpcPage />} />
        <Route path="/clients/:clientId/imps" element={<ImpsPage />} />
        <Route path="/clients/:clientId/rev" element={<Revenue />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
