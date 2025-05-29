import React, { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        const animate = (el,end,dur) => {
            let start=0, startTime=null;
            const step = t => {
                if(!startTime) startTime=t;
                const prog = Math.min((t-startTime)/dur,1);
                el.innerText = Math.floor(prog*(end-start))+ '+';
                if(prog<1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };
        const items = document.querySelectorAll('.stat-number');
        const io = new IntersectionObserver(entries=>{
            entries.forEach(e=>{
                if(e.isIntersecting){
                    const el=e.target;
                    animate(el, +el.dataset.countEnd, +el.dataset.countDuration);
                    io.unobserve(el);
                }
            });
        },{threshold:0.5});
        items.forEach(i=>io.observe(i));
        return ()=>io.disconnect();
    }, []);

    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title fade-in">Обо мне</h2>
                <div className="about-content">
                    <div className="about-text fade-in">
                        <p>
                            Я опытный веб-разработчик с более чем 3-хлетним опытом создания современных веб-приложений.
                            Моя страсть к разработке началась еще в доковидные времена и с тех пор я постоянно
                            совершенствую свои знания и навыки, разрабатывая различные сервисы (веб-приложения,
                            телеграмм боты, парсеры, различные интеграции API)
                        </p>

                        <div className="stats">
                            {[
                                { end:3,   label:'Лет опыта',    dur:1500 },
                                { end:30,  label:'Проектов',      dur:2000 },
                                { end:10,  label:'Клиентов',      dur:2000 }
                            ].map((s,i)=>(
                                <div className="stat-item" key={i}>
                                    <div
                                        className="stat-number"
                                        data-count-end={s.end}
                                        data-count-duration={s.dur}
                                    >0+</div>
                                    <div>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-image fade-in">
                        <img src="https://via.placeholder.com/400x300" alt="Портрет разработчика"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
