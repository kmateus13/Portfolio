import { useEffect } from 'react';
import Button from '../Button/Button'
import './ContentHeader.css'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import ScrollReveal from 'scrollreveal';

export default function ContentHeader() {
    useEffect(() => {
        ScrollReveal().reveal('.introduction1');
        ScrollReveal().reveal('.introduction2', { delay: 500 });
        ScrollReveal().reveal('.introduction3', { delay: 1000 });
        ScrollReveal().reveal('.introduction4', { delay: 1500 });
    }, [])

    return (
        <div className='content'>
            <div className='leftContent'>
                <h3 className='introduction1'>OLÁ, EU SOU</h3>
                <h1 className='introduction2'>KLISMAN MATEUS</h1>
                <h3 className='introduction3'>DESENVOLVEDOR</h3>
                <div className='container_button introduction4'>
                    <Button icon={<FiLinkedin />} name='Linkedin' gradient='#9358F7, #10D7E2' className='btnLinkedin' link='https://www.linkedin.com/in/klismanmateus/' />
                    <Button icon={<FiGithub />} name='Github' gradient='#D24074, #6518B4' className='btnGithub' link='https://github.com/kmateus13' />
                </div>
            </div>
            <div className='rightContent'>
                <img src='./PortfolioReact.svg' alt="Ilustração" />
            </div>
        </div>
    )
}