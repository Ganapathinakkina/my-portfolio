import "./Navbar.css"

import LogoImg from "../../Assets/LogoImg.png"
import DownloadIcon from "../../Assets/downloadIcon.png"
import resume from '../../Assets/pdfs/RESUME.pdf';

import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { MdHome } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineFileDownload } from "react-icons/md";


const Navbar = () => {

  const handleDownload = async () => {
    try {
      const response = await fetch(resume);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.target = '_self';
      a.download = 'GanapathiNakkinaResume.pdf';
      a.click();
      window.URL.revokeObjectURL(url);

      toast.success('Resume downloaded successfully', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {

      toast.error('Resume download failed', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error('Download error:', error);
    }
  };

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="navbar">
      <div className='title' >
        <Link to="/"><h1 to="/">Ganapathi</h1></Link>
        <img src={LogoImg} alt="" />
      </div>
      <div className={click ? "menu active" : "menu"}>
        <Link to="/"> <MdHome id="menu-icons"/> Home</Link>
        <Link to="/about"> <IoMdContact id="menu-icons"/> About</Link>
        <Link to="/skills"> <GiSkills id="menu-icons"/> Skills</Link>
        <Link to="/contact"> <GiRotaryPhone id="menu-icons"/> Contact</Link>
        <a id="downloadCV-resp" onClick={handleDownload}> <MdOutlineFileDownload id="menu-icons"/> Download CV </a>
        

      </div>
      <div className="cvButton">
        <button onClick={handleDownload}>
          <img src={DownloadIcon} alt="" />
          <p>Download CV</p>
        </button>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {
          click ? (<FaTimes style={{ color: "white" }} size={18} />) :
            (<FaBars style={{ color: "black" }} size={22} />)
        }
      </div>
    </div>
  )
}


export default Navbar