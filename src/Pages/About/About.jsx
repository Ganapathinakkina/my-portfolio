import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Myinfo from './Components/MyInfo/Myinfo'
// import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
// import Footer from '../../Components/Footer/Footer'
import AboutFooter from './Components/AboutFooter/AboutFooter'


const About = () => {
  return (
    <>
     <Navbar/>
     <Myinfo/>
     <Education/>
     <AboutFooter/>
     
    </>
  )
}

export default About