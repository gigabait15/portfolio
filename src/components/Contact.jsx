import React, { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
    const handleChange = e => setForm(f=>({...f,[e.target.id]:e.target.value}));
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form:', form);
        alert('Ваше сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.');
        setForm({ name:'', email:'', subject:'', message:'' });
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title fade-in">Связаться со мной</h2>
                <div className="contact-container">
                    <div className="contact-info fade-in">
                        <p>Готов обсудить ваш проект…</p>
                        <div className="contact-methods">
                            {[
                                { icon:'fas fa-envelope', title:'Email',    text:'contact@example.com' },
                                { icon:'fas fa-phone',   title:'Телефон',  text:'+7 (999) 123-45-67' },
                                { icon:'fas fa-map-marker-alt', title:'Локация',  text:'Москва, Россия' }
                            ].map((c,i)=>(
                                <div className="contact-method" key={i}>
                                    <div className="contact-icon"><i className={c.icon}></i></div>
                                    <div><h4>{c.title}</h4><p>{c.text}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="contact-form fade-in">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Имя</label>
                                    <input id="name" type="text" className="form-control" required value={form.name} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input id="email" type="email" className="form-control" required value={form.email} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Тема</label>
                                <input id="subject" type="text" className="form-control" required value={form.subject} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Сообщение</label>
                                <textarea id="message" className="form-control" rows="5" required value={form.message} onChange={handleChange}/>
                            </div>
                            <button type="submit" className="submit-btn">Отправить сообщение</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
