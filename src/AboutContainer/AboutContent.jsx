import Button from '../Button/Button'
import './AboutContent.css'
import {FiDownloadCloud , FiMail, FiInstagram, FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function AboutContent() {
    return (
        <div className='aboutContainer'>
            <div className='leftContainer'>
                <div className='foto'>

                </div>
            </div>
            <div className='rightContainer'>
                <h1>SOBRE MIM</h1>
                <h3>Campina Grande - PB, Brasil</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at praesentium et deserunt animi nisi delectus nostrum necessitatibus facere in, maiores, laborum consequuntur ducimus aliquid ipsa vitae reiciendis rem eius.
                </p>
                <div className='iconsContainer'>
                    <FiInstagram size={24}/>
                    <FiFacebook size={24}/>
                    <FiLinkedin size={24}/>
                    <FiGithub size={24}/>
                </div>
                <div className='buttonsContainer'>
                    <Button icon={<FiDownloadCloud />} name='Currículo' gradient='#D24074, #6518B4' />
                    <Button icon={<FiMail />} name='E-mail' gradient='#9358F7, #10D7E2'  />
                </div>
            </div>
        </div>
    )
}