import React from 'react';

export default function Skills() {
    const skills = [
        {
            icon:'fab fa-react',
            title:'Front-end разработка',
            desc:'HTML, CSS, JavaScript, React для создания красивых и функциональных интерфейсов.'
        },
        {
            icon:'fab fa-python',
            title:'Back-end разработка',
            desc:'Python, SQL и NoSQL базы данных для создания надежной серверной логики.'
        },
        {
            icon:'fas fa-code',
            title:'Парсинг данных',
            desc:'Selenium и Beautiful Soup для получение данных с различных веб-сервисов.'
        },
        {
            icon:'fas fa-cogs',
            title:'Работа с API',
            desc:'Интеграция различных готовых решений (API) в ваш проект'
        },
    ];
    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2 className="section-title fade-in">Мои навыки</h2>
                <div className="skills-container">
                    {skills.map((s,i)=>(
                        <div className="skill-card fade-in" key={i}>
                            <div className="skill-icon"><i className={s.icon}></i></div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
