import './Skills.css'

import Skill1 from "../../../../Assets/skill1.jpg"
import Skill2 from "../../../../Assets/skill2.jpg"
import Skill3 from "../../../../Assets/skill3.jpg"
import Skill4 from "../../../../Assets/skill4.jpg"
import Skill5 from "../../../../Assets/skill5.jpg"
import Skill6 from "../../../../Assets/skill6.jpg"
import Skill7 from "../../../../Assets/skill7.jpg"
import Skill8 from "../../../../Assets/skill8.jpg"
import Skill9 from "../../../../Assets/skill9.jpg"
import Skill10 from "../../../../Assets/skill10.jpg"
import Skill11 from "../../../../Assets/skill11.jpg"


const Skills = () => {

    const mySkills = [
        {
            skillLogo: Skill1,
            skillName: "HTML"
        },
        {
            skillLogo: Skill2,
            skillName: "CSS"
        },
        {
            skillLogo: Skill3,
            skillName: "JAVA SCRIPT"
        },
        {
            skillLogo: Skill4,
            skillName: "BOOTSTRAP"
        },
        {
            skillLogo: Skill5,
            skillName: "REACT"
        },
        {
            skillLogo: Skill6,
            skillName: "GIT"
        },
        {
            skillLogo: Skill7,
            skillName: "GIT HUB"
        },
        {
            skillLogo: Skill8,
            skillName: "NODE JS"
        },
        {
            skillLogo: Skill9,
            skillName: "EXPRESS JS"
        },
        {
            skillLogo: Skill10,
            skillName: "POST MAN"
        },
        {
            skillLogo: Skill11,
            skillName: "MONGO DB"
        },
    ]

    return (
        <div className='skills'>

            {/* <hr /> */}

            <div className='mySkills'>
                <h1><u> Skills</u></h1>
                <div className="skillsImgs">
                    {
                        mySkills.map((item, index) => {
                            const { skillLogo, skillName } = item
                            return (
                                <div className='skillsCard'>
                                    <img src={skillLogo} alt="" />
                                    <div>
                                        <p>{skillName}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <hr />

        </div>
    )
}

export default Skills