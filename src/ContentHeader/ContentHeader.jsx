import Button from '../Button/Button'
import './ContentHeader.css'
import {FiGithub, FiLinkedin} from 'react-icons/fi'

export default function ContentHeader(){
    return(
        <div className='content'>
            <div className='leftContent'>
                <h3>OLÁ, EU SOU</h3>
                <h1>KLISMAN MATEUS</h1>
                <h3>DESENVOLVEDOR FRONT-END</h3>
                <div className='container_button'>
                    <Button icon={<FiLinkedin/>} name='Linkedin' gradient='#9358F7, #10D7E2' className='btnLinkedin'/>
                    <Button icon={<FiGithub/>} name='Github' gradient='#D24074, #6518B4' className='btnGithub' />
                </div>
            </div>
            <div className='rightContent'>
                <img src='./PortfolioReact.svg' alt="Ilustração" />
            </div>
        </div>
    )
}