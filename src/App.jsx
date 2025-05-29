import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        const onScroll = () => {
            elements.forEach(el => {
                const top = el.getBoundingClientRect().top;
                if (top < window.innerHeight - 150) el.classList.add('visible');
            });
        };
        window.addEventListener('scroll', onScroll);
        window.addEventListener('load', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('load', onScroll);
        };
    }, []);

    return (
        <>
            <Navbar theme={theme} toggleTheme={() => setTheme(t => t==='light'?'dark':'light')} />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default App;
