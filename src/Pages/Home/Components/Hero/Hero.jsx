import React from 'react'
import HelloButton from "../../../../Assets/HelloButton.png"
import HeroImg from "../../../../Assets/HeroImg.png"
import Resume from "../../../../Assets/resumeScreenshot.png"
import { ReactTyped as Typed } from 'react-typed';
import { useState } from 'react'

import "./Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const openPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };


    return (
        <div className='hero'>
            <img src={HelloButton} alt="" className='helloImg'/>

            <div className='heroImg-responsive'>
                <img src={HeroImg} alt="" />
            </div>

            <div className='heroContainer'>
                <img src={HelloButton} alt="" />
                <div className="content">
                <h1>
                    I'm <span>Ganapathi</span>, {' '}
                    <Typed
                        strings={['a Software Developer']}
                        style={{color:"black"}}
                        typeSpeed={90}
                        backSpeed={50}
                        showCursor={showCursor} // Control cursor visibility
                        onComplete={() => setShowCursor(false)} // Hide cursor on typing completion
                
                    />
                </h1>
                </div>
                <div className="resumeButton">
                    <button onClick={openPopup}>View Resume</button>
                    <Link to={"/skills"} >Skills</Link>
                </div>

            </div>
            <div className='heroImg'>
                <img src={HeroImg} alt="" />
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


export default Hero