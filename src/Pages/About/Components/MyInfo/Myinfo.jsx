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
                    <p>Motivated ReactJS developer with strong proficiency in HTML, CSS,
                        JavaScript, ReactJS, Redux, and Bootstrap. Experienced in building
                        responsive web applications and integrating APIs. Excellent
                        communication skills and a strong work ethic complement my technical
                        expertise. As a B.Sc. graduate and fresher, I am eager to contribute to
                        innovative frontend development projects. Seeking an opportunity to
                        leverage my skills and grow within a dynamic organization.</p>
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