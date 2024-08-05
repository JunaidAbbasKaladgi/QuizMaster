import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Quiz/Home'
import Web from './components/Quiz/Web'
import DataAnalyst from './components/Quiz/DataAnalyst'
import Artificial from './components/Quiz/Artificial'
import CyberSec from './components/Quiz/CyberSec'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Web" element={<Web />} />
        <Route path="DataAnalyst" element={<DataAnalyst />} />
        <Route path="Artificial" element={<Artificial />} />
        <Route path="CyberSec" element={<CyberSec />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;