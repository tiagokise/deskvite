import React, { useState } from "react"
import { Routes, Route } from "react-router-dom";

import Home from './containers/Home/Home'
// @ts-ignore
// import ImageGallery from './components/ImageGallery/ImageGallery.jsx'
import { Gallery } from "./components/Gallery/Gallery";
// import './styles/globals.css'



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Gallery />} />
    </Routes>
  )
}

export default App;