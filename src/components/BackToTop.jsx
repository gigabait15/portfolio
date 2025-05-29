import React, { useState, useEffect } from 'react';

export default function BackToTop() {
    const [visible,setVisible] = useState(false);

    useEffect(()=>{
        const onScroll=()=>setVisible(window.scrollY>300);
        window.addEventListener('scroll',onScroll);
        return ()=>window.removeEventListener('scroll',onScroll);
    },[]);

    const goTop = e => {
        e.preventDefault();
        window.scrollTo({top:0,behavior:'smooth'});
    };

    return (
        <a
            href="#"
            className={`back-to-top ${visible?'visible':''}`}
            onClick={goTop}
        >
            <i className="fas fa-arrow-up"></i>
        </a>
    );
}
