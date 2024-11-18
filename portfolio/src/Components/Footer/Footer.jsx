import SocialIcon1 from "../../Assets/socialIcon1.png"
import SocialIcon2 from "../../Assets/socialIcon2.png"
import SocialIcon3 from "../../Assets/socialIcon3.jpg"
import { Tooltip, TooltipProvider } from 'react-tooltip';
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerIcons">
        <a href="https://www.linkedin.com/in/ganapathi-nakkina-94a203274/" target="_blank" rel="noopener noreferrer"><img src={SocialIcon2} alt="Ganapathi Linkdin profile" /></a>
        <a href="#"><img src={SocialIcon3} alt="Ganapathi Naukri profile" data-tooltip-id="naukri-tooltip" data-tooltip-content="This is my Naukri profile name 'Ganapathi Nakkina'" id="socialIcon3" /></a>
        <a href="#"><img src={SocialIcon1} alt="Ganapathi Mail profile" data-tooltip-id="mail-tooltip" data-tooltip-content="This is my official Gmail ID 'gananakkina19@gmail.com'" /></a>
        <Tooltip id="naukri-tooltip" style={{ backgroundColor: '#d1e7dd', color: 'green', padding: '10px', borderRadius: '5px' }}  />
        <Tooltip id="mail-tooltip" style={{ backgroundColor: '#d1e7dd', color: 'green', padding: '10px', borderRadius: '5px' }} />
      </div>

      <p> © 2024 Ganapathi. All rights reserved.</p>

    </div>
  )
}

export default Footer