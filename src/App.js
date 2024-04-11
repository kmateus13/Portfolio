import { useEffect } from 'react';
import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import ScrollReveal from 'scrollreveal';

function App() {

  useEffect(() => {
    const elements = document.querySelectorAll('.effectScroll');

    elements.forEach(element => {
        const distanceFromLeft = element.getBoundingClientRect().left; 
        const distance = `${distanceFromLeft}px`; 

        ScrollReveal().reveal(element, {
            distance: distance,
            interval: 5000,
            origin: 'left',
            reset: true
        });
    });
}, []);

  return (
    <>
      <Header />
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
