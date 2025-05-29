import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Developer.</h3>
                        <p>Создаю современные веб-решения…</p>
                        <div className="social-links">
                            {['github','linkedin','twitter','instagram'].map(s=>(
                                <a href="#" className="social-link" key={s}>
                                    <i className={`fab fa-${s}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Быстрые ссылки</h3>
                        <ul className="footer-links">
                            {['about','skills','projects','contact'].map(id=>(
                                <li key={id}><a href={`#${id}`}>{{
                                    about:'Обо мне',
                                    skills:'Навыки',
                                    projects:'Проекты',
                                    contact:'Контакты'
                                }[id]}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Услуги</h3>
                        <ul className="footer-links">
                            {['Веб-разработка','Мобильная разработка','UI/UX дизайн','Консультации'].map(s=>(
                                <li key={s}><a href="#">{s}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2023 Developer. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}
