import { Routes, Route } from "react-router-dom";

import Home from './containers/Home/Home'
import { Gallery } from "./components/Gallery/Gallery";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Gallery />} />
    </Routes>
  )
}

export default App;