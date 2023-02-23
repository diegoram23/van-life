import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Vans from "./Vans";
import "../server"

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/van-life/">#VANLIFE</Link>
        <nav>
          <Link to="/van-life/about">About</Link>
          <Link to="/van-life/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/van-life/" element={<Home />} />
        <Route path="/van-life/about" element={<About />} />
        <Route path="/van-life/vans" element={<Vans />}/>
      </Routes>
    </BrowserRouter>
  )
}