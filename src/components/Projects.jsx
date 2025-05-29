import React from 'react';

export default function Projects() {
    const projects = [
        {
            img:'https://via.placeholder.com/400x200',
            title:'Веб-приложение для управления задачами',
            desc:'Современное приложение…',
            tags:['React','Node.js','MongoDB']
        },
        {
            img:'https://via.placeholder.com/400x200',
            title:'Интернет-магазин',
            desc:'Полнофункциональный интернет-магазин…',
            tags:['Vue.js','Laravel','MySQL']
        }
    ];
    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title fade-in">Мои проекты</h2>
                <div className="projects-container">
                    {projects.map((p,i)=>(
                        <div className="project-card fade-in" key={i}>
                            <div className="project-image"><img src={p.img} alt={p.title}/></div>
                            <div className="project-info">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="project-tags">
                                    {p.tags.map(t=><span className="project-tag" key={t}>{t}</span>)}
                                </div>
                                <div className="project-links">
                                    <a href="#" className="project-link view-link">Просмотр</a>
                                    <a href="#" className="project-link code-link">Код</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
