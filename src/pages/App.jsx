import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'


export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/van-life/">#VANLIFE</Link>
        <nav>
          <Link to="/van-life/about">About</Link>
        </nav>
      <Link to="/van-life/">Home</Link>
      </header>
      <Routes>
        <Route path="/van-life/" element={<Home />} />
        <Route path="/van-life/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}