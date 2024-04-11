import { useEffect } from 'react';
import Button from '../Button/Button'
import './AboutContent.css'
import { FiDownloadCloud, FiMail, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'
import ScrollReveal from 'scrollreveal';
export default function AboutContent() {
    // useEffect(() => {
    //     ScrollReveal().reveal('.effectScroll', {
    //         interval: 500,
    //         reset: true,
    //         origin: 'left'
    //     });
    // }, []);

    return (
        <div className='aboutContainer'>
            <div className='leftContainer effectScroll'>
                <div className='foto'>

                </div>
            </div>
            <div className='rightContainer effectScroll'>
                <h1>SOBRE MIM</h1>
                <h3>Campina Grande - PB, Brasil</h3>
                <p>
                Estudante entusiasmado em busca de oportunidades para iniciar uma carreira como desenvolvedor, com conhecimentos na área de administração e interesse em programação. Familiarizado com conceitos de desenvolvimento web e pronto para aplicar habilidades técnicas em projetos desafiadores
                </p>
                <div className='iconsContainer'>
                    <a href='https://www.instagram.com/klisman013/'><FiInstagram size={24} /></a>
                    <a href='https://www.linkedin.com/in/klismanmateus'><FiLinkedin size={24} /></a>
                    <a href='https://github.com/kmateus13'><FiGithub size={24} /></a>
                </div>
                <div className='buttonsContainer'>
                    <Button icon={<FiDownloadCloud />} name='Currículo' gradient='#D24074, #6518B4' />
                    <Button icon={<FiMail />} name='E-mail' gradient='#9358F7, #10D7E2' link='mailto:klismanmts@gmail.com' />
                </div>
            </div>
        </div>
    )
}