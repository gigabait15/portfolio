import React, { useState, useEffect } from 'react';

export default function Hero() {
    const phrases = [
        'Привет, я backend-разработчик',
        'Создаю современные приложения',
        'Воплощаю идеи в код'
    ];
    const [text, setText] = useState('');
    const [idx, setIdx] = useState(0);
    const [char, setChar] = useState(0);
    const [del, setDel] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const current = phrases[idx];
        const timer = setTimeout(() => {
            if (del) {
                setText(current.substring(0, char - 1));
                setChar(c => c - 1);
                setSpeed(50);
            } else {
                setText(current.substring(0, char + 1));
                setChar(c => c + 1);
                setSpeed(100);
            }
        }, speed);

        if (!del && char === current.length) {
            setDel(true);
            setSpeed(1000);
        } else if (del && char === 0) {
            setDel(false);
            setIdx(i => (i + 1) % phrases.length);
            setSpeed(500);
        }

        return () => clearTimeout(timer);
    }, [char, del, idx, phrases, speed]);

    return (
        <>
            <header>
                <div className="container">
                    <h1>Портфолио разработчика</h1>
                </div>
            </header>

            <section className="hero">
                <h1 className="typewriter">{text}</h1>
                <div className="container">
                    <p>
                        Создаю современные, отзывчивые и функциональные веб-сайты и приложения.
                        Моя цель — воплощать ваши идеи в цифровую реальность.
                    </p>
                    <a href="#contact" className="cta-button">
                        Связаться со мной
                    </a>
                </div>
            </section>
        </>
    );
}
