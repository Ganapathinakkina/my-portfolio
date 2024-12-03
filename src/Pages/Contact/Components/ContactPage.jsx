import { IoCallOutline as Phone} from "react-icons/io5";
import { TbMail as Mail} from "react-icons/tb";
import { CiLinkedin as LinkedIn } from "react-icons/ci";
import { FaMapMarkerAlt as Map} from "react-icons/fa";
import MapImg from '../../../Assets/mapImg.png'


import './ContactPage.css'

const ContactPage = () => {
    return (
        <div className='ContactPage'>
            <div className="contactInfo">
                <h2>Hi There !</h2>
                <p>I'm a passionate MERN stack developer with a talent for building full end-to-end web applications. 
                    Open to work in full-time, part-time, or freelance roles, I'm eager to bring dynamic, innovative projects to life and contribute to your vision. Let's connect!</p>
                <p>Feel free to reach out to me via Email if there are any opportunities or needs ! </p>
                <div className='contactVia'>
                    <div className="icons">
                        {/* <img src={Phone} alt="" /> */}
                        <Phone style={{ color: 'white', fontSize: '24px' }}/>
                        <h4>9133036250</h4>
                    </div>
                    <div className="icons">
                        {/* <img src={<Mail/>} alt="" /> */}
                        <Mail style={{ color: 'white', fontSize: '24px' }}/>
                        <h4>gananakkina19@gmail.com</h4>
                    </div>
                    <div className="icons">
                        {/* <img src={<LinkedIn/>} alt="" /> */}
                        <LinkedIn style={{ color: 'white', fontSize: '24px' }}/>
                        <h4>Ganapathi Nakkina</h4>
                    </div>
                    <div className="icons">
                        {/* <img src={<Map/>} alt="" /> */}
                        <Map style={{ color: 'white', fontSize: '24px' }}/>
                        <h4>Telangana, Hyderabad, 500081</h4>
                    </div>
                </div>
            </div>
            <div className="contactImg">
                <img src={MapImg} alt="" />
            </div>

        </div>
    )
}

export default ContactPage