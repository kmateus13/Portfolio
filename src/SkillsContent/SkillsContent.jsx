import './SkillsContent.css'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTypescript, BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'

export default function SkillsContent() {

    const skills = [<BiLogoHtml5 />, <BiLogoCss3 />, <BiLogoJavascript />, <BiLogoReact />, <BiLogoTypescript />, <BiLogoTailwindCss />, <TbBrandNextjs/>]

    return (
        <div className='skillsContentContainer'>
            <h1>HABILIDADES</h1>
            <div className='containerSkill'>
                {skills.map((skill, index) => {
                    return (
                        <div className='contentSkill effectScroll' key={index}>
                            {skill}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}