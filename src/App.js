import React from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/clients/')
      console.log(res)
    }
    getData()
  })

  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
