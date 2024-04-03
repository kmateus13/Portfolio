import { useEffect, useState } from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

export default function Navbar() {


    const [mode, setMode] = useState(false)
    const [mobileVersion, setmobileVersion] = useState(false)

    const html = document.querySelector('html')

    function toggle() {
        setMode(!mode)
    }

    if (mode) {
        html.classList.add('light-mode')
    } else {
        html.classList.remove('light-mode')
    }


    useEffect(() => {
        const sessoes = document.querySelectorAll('#navbarMobile li');

        function close() {
            setTimeout(() => {
                if (mobileVersion) {
                    setmobileVersion(false)
                }
            }, 100)
        }

        sessoes.forEach(sessao => {
            sessao.addEventListener('click', () => close());
        });
    }, []);




    return (
        <div className='containerNav'>
            <label className='labelPortfolio'>{'<Portfólio />'}</label>

            <nav className='navbar' id='desktopVersion'>
                <div>
                    <ul className='navbar_menu'>
                        <li> <Link to="Header" smooth={true} duration={500} offset={-250}>Home</Link></li>
                        <li> <Link to="About" smooth={true} duration={500} offset={-250}>Sobre mim</Link></li>
                        <li> <Link to="Experience" smooth={true} duration={500} offset={-250}>Experiências</Link></li>
                        <li> <Link to="Education" smooth={true} duration={500} offset={-250}>Formação</Link></li>
                        <li> <Link to="Skills" smooth={true} duration={500} offset={-250}>Habilidades</Link></li>
                        <li> <Link to="Projects" smooth={true} duration={500} offset={-150}>Projetos</Link></li>
                        <input id='chk' type="checkbox" onChange={toggle} checked={mode} />
                        <Toggle chk={'chk'} />
                    </ul>
                </div>
            </nav>

            <FaBars className='btnOpen' onClick={() => setmobileVersion(!mobileVersion)} />
            <nav id='menuMobile' className={mobileVersion ? 'menuActive' : ''}>
                <MdClose className='btnClose' onClick={() => setmobileVersion(!mobileVersion)} />
                <ul id='navbarMobile'>
                    <li> <Link to="Header" smooth={true} duration={500} offset={-250}>Home</Link></li>
                    <li> <Link to="About" smooth={true} duration={500} offset={-250}>Sobre mim</Link></li>
                    <li> <Link to="Experience" smooth={true} duration={500} offset={-250}>Experiências</Link></li>
                    <li> <Link to="Education" smooth={true} duration={500} offset={-250}>Formação</Link></li>
                    <li> <Link to="Skills" smooth={true} duration={500} offset={-250}>Habilidades</Link></li>
                    <li> <Link to="Projects" smooth={true} duration={500} offset={-150}>Projetos</Link></li>
                    <input id='chkMobile' type="checkbox" onChange={toggle} checked={mode} />
                    <Toggle chk={'chkMobile'} />
                </ul>
            </nav>


        </div>
    )
}