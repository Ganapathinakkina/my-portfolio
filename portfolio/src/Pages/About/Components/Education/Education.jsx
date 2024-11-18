import DgreenDot from "../../../../Assets/DgreenDot.png"
import LgreenDot from "../../../../Assets/LgreenDot.png"
import EducationImg from "../../../../Assets/educationImg.png"

import "./Education.css"

const Education = () => {
    return (
        <div className='education'>
            <div className="educationContent">
                <img src={DgreenDot} alt="" className="dot1" />
                <img src={LgreenDot} alt="" className="dot2" />
                <div className='eduTitle'>
                    <h1>EDUCATION</h1>
                </div>
                <div className="eduContent">
                    <div className="myEducation">
                        <h3>Bachelor's Degree in BSC </h3>
                        <p>Modern Degree College, Ramachandrapuram.</p>
                        <p>July 2019 - June 2022</p>
                    </div>
                    <div className="myEducation">
                        <h3>Intermediate in the Group of M.P.C</h3>
                        <p>R.R.B.H.R Govt Jr. College, Pitapuram.</p>
                        <p>June 2017 - May 2019</p>
                    </div>
                    <div className="myEducation">
                        <h3>SSC</h3>
                        <p>Sri Gowthami MPL High School, Mandapeta</p>
                        <p>June 2016 - April 2017</p>
                    </div>
                </div>
            </div>
            <div className="educationImage">
                    <img src={EducationImg} alt="" />
            </div>
        </div>
    )
}

export default Education