import "./Navbar.css"

import LogoImg from "../../Assets/LogoImg.png"
import DownloadIcon from "../../Assets/downloadIcon.png"
import resume from '../../Assets/pdfs/RESUME.pdf';

import { Link } from 'react-router-dom'
import { toast } from "react-toastify"


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

  return (
    <div className="navbar">
        <div className='title' >
            <Link to="/"><h1 to="/">Ganapathi</h1></Link>
            <img src={LogoImg} alt="" />
        </div>
        <div className='menu'>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/skills">Skills</Link>
           <Link to="/contact">Contact</Link>
           
        </div>
        <div className="cvButton">
            <button onClick={handleDownload}>
              <img src={DownloadIcon} alt="" />
              <p>Download CV</p>
            </button>
        </div>
    </div>
  )
}

export default Navbar