import React from 'react'

import "./App.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Skills from './Pages/SkillsPage/SkillPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
