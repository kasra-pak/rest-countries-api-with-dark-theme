import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Header from './components/Header'
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </Router>
  )
}