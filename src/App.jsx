import React from 'react'
// import './App.css'
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"


export default function App() {
  return (
   <>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Project" element={<Project/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
   </>
  )
}
