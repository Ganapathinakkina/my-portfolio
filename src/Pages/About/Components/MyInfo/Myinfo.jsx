import AboutImg from "../../../../Assets/AboutImg.png"
import { useState } from 'react'
import "./Myinfo.css"
import Resume from "../../../../Assets/resumeScreenshot.jpg"
import { Link } from "react-router-dom"


const Myinfo = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const openPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div className='aboutInfo'>
            <div className='info'>
                <div className="aboutContent">
                    <h1>ABOUT</h1>
                    <div className='aboutImg-responsive'>
                        <img src={AboutImg} alt="" />
                    </div>
                    <p>Motivated BSc graduate with strong communication, problem-solving, and organizational skills. Eager to start a career as a Process Executive,
                        bringing proficiency in MS Office, quick adaptability to new systems, and a commitment to accuracy and efficiency in managing tasks and performance metrics.</p>
                </div>
                <div className="resumeButton">
                    <button onClick={openPopup}>View Resume</button>
                    <Link to={"/skills"} >Skills</Link>
                </div>
            </div>
            <div className='aboutImg'>
                <img src={AboutImg} alt="" />
            </div>
            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>
                            &times;
                        </span>
                        {/* Resume Image */}
                        <img src={Resume} alt="Resume" className="resume-image" />
                    </div>
                </div>
            )}
        </div>

    )
}

export default Myinfo