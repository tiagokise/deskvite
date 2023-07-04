// import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";

import Home from './containers/Home/Home'
// import './styles/globals.css'

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<About />} />
    </Routes>
  )
}

export default App;