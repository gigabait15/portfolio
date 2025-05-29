import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled?'scrolled':''}`}>
            <div className="nav-container">
                <a href="#" className="logo">Developer.</a>
                <button className="mobile-toggle" onClick={()=>setMobileOpen(o=>!o)}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul className={`nav-links ${mobileOpen?'active':''}`}>
                    {['about','skills','projects','contact'].map(id=>(
                        <li key={id}>
                            <a href={`#${id}`} onClick={()=>setMobileOpen(false)}>
                                {{
                                    about:'Обо мне',
                                    skills:'Навыки',
                                    projects:'Проекты',
                                    contact:'Контакты'
                                }[id]}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            <i className={`fas ${theme==='light'?'fa-moon':'fa-sun'}`}></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
