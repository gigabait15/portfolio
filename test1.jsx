var MyClass = React.createClass({
    render: function() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Портфолио разработчика</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                <style dangerouslySetInnerHTML={{__html: "\n        :root {\n            --primary-color: #4a90e2;\n            --secondary-color: #6a5acd;\n            --dark-color: #333;\n            --light-color: #f5f5f5;\n            --accent-color: #ff6b6b;\n            --success-color: #2ecc71;\n            --text-color: #333;\n            --transition-speed: 0.3s;\n        }\n\n        @keyframes fadeIn {\n            from { opacity: 0; transform: translateY(20px); }\n            to { opacity: 1; transform: translateY(0); }\n        }\n\n        @keyframes pulse {\n            0% { transform: scale(1); }\n            50% { transform: scale(1.05); }\n            100% { transform: scale(1); }\n        }\n\n        @keyframes slideInLeft {\n            from { opacity: 0; transform: translateX(-50px); }\n            to { opacity: 1; transform: translateX(0); }\n        }\n\n        @keyframes slideInRight {\n            from { opacity: 0; transform: translateX(50px); }\n            to { opacity: 1; transform: translateX(0); }\n        }\n\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: 'Poppins', 'Arial', sans-serif;\n        }\n\n        html {\n            scroll-behavior: smooth;\n        }\n\n        body {\n            background-color: var(--light-color);\n            color: var(--text-color);\n            line-height: 1.6;\n            overflow-x: hidden;\n        }\n\n        .dark-mode {\n            --light-color: #1a1a1a;\n            --text-color: #f5f5f5;\n            --dark-color: #f5f5f5;\n            background-color: var(--light-color);\n            color: var(--text-color);\n        }\n\n        .dark-mode .skill-card {\n            background-color: #2d2d2d;\n            box-shadow: 0 4px 15px rgba(0,0,0,0.3);\n        }\n\n        .dark-mode .project-card {\n            background-color: #2d2d2d;\n        }\n\n        .dark-mode .timeline-item {\n            background-color: #2d2d2d;\n        }\n\n        .navbar {\n            position: fixed;\n            top: 0;\n            width: 100%;\n            background-color: rgba(255, 255, 255, 0.95);\n            box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n            z-index: 1000;\n            transition: all 0.3s ease;\n        }\n\n        .dark-mode .navbar {\n            background-color: rgba(40, 40, 40, 0.95);\n        }\n\n        .navbar.scrolled {\n            padding: 0.5rem 0;\n        }\n\n        .nav-container {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 1rem 2rem;\n        }\n\n        .logo {\n            font-size: 1.5rem;\n            font-weight: bold;\n            color: var(--primary-color);\n            text-decoration: none;\n        }\n\n        .nav-links {\n            display: flex;\n            list-style: none;\n        }\n\n        .nav-links li {\n            margin-left: 2rem;\n        }\n\n        .nav-links a {\n            text-decoration: none;\n            color: var(--text-color);\n            font-weight: 500;\n            transition: color var(--transition-speed);\n            position: relative;\n        }\n\n        .nav-links a:after {\n            content: '';\n            position: absolute;\n            width: 0;\n            height: 2px;\n            bottom: -5px;\n            left: 0;\n            background-color: var(--primary-color);\n            transition: width var(--transition-speed);\n        }\n\n        .nav-links a:hover:after {\n            width: 100%;\n        }\n\n        .theme-toggle {\n            background: none;\n            border: none;\n            cursor: pointer;\n            font-size: 1.2rem;\n            color: var(--text-color);\n            margin-left: 1.5rem;\n        }\n\n        .mobile-toggle {\n            display: none;\n            background: none;\n            border: none;\n            font-size: 1.5rem;\n            cursor: pointer;\n            color: var(--text-color);\n        }\n\n        header {\n            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));\n            color: white;\n            padding: 8rem 0 4rem;\n            text-align: center;\n            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n        }\n\n        .container {\n            max-width: 1200px;\n            margin: 0 auto;\n            padding: 0 2rem;\n        }\n\n        .hero {\n            padding: 6rem 0 4rem;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            text-align: center;\n            animation: fadeIn 1s ease-out;\n        }\n\n        .hero h1 {\n            font-size: 3rem;\n            margin-bottom: 1rem;\n            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n        }\n\n        .hero p {\n            font-size: 1.3rem;\n            max-width: 700px;\n            margin-bottom: 2.5rem;\n            animation: fadeIn 1.2s ease-out;\n        }\n\n        .typewriter {\n            border-right: 3px solid var(--primary-color);\n            white-space: nowrap;\n            overflow: hidden;\n            margin: 0 auto;\n            animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;\n        }\n\n        @keyframes typing {\n            from { width: 0 }\n            to { width: 100% }\n        }\n\n        @keyframes blink-caret {\n            from, to { border-color: transparent }\n            50% { border-color: var(--primary-color) }\n        }\n\n        .cta-button {\n            display: inline-block;\n            background-color: var(--primary-color);\n            color: white;\n            padding: 1rem 2rem;\n            border-radius: 50px;\n            text-decoration: none;\n            font-weight: bold;\n            transition: all var(--transition-speed);\n            box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);\n            position: relative;\n            overflow: hidden;\n            z-index: 1;\n        }\n\n        .cta-button:before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 0;\n            height: 100%;\n            background: var(--secondary-color);\n            transition: all 0.5s;\n            z-index: -1;\n            border-radius: 50px;\n        }\n\n        .cta-button:hover:before {\n            width: 100%;\n        }\n\n        .cta-button:hover {\n            transform: translateY(-3px);\n            box-shadow: 0 10px 20px rgba(74, 144, 226, 0.4);\n        }\n\n        .cta-button:active {\n            transform: translateY(-1px);\n            box-shadow: 0 5px 10px rgba(74, 144, 226, 0.4);\n        }\n\n        .section-title {\n            text-align: center;\n            margin-bottom: 3rem;\n            position: relative;\n            font-size: 2.5rem;\n        }\n\n        .section-title:after {\n            content: '';\n            position: absolute;\n            width: 100px;\n            height: 3px;\n            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));\n            bottom: -10px;\n            left: 50%;\n            transform: translateX(-50%);\n            border-radius: 10px;\n        }\n\n        .about {\n            padding: 6rem 0;\n            background-color: white;\n        }\n\n        .dark-mode .about {\n            background-color: #222;\n        }\n\n        .about-content {\n            display: flex;\n            align-items: center;\n            gap: 4rem;\n        }\n\n        .about-text {\n            flex: 1;\n            animation: slideInLeft 1s ease-out;\n        }\n\n        .about-image {\n            flex: 1;\n            text-align: center;\n            animation: slideInRight 1s ease-out;\n        }\n\n        .about-image img {\n            max-width: 100%;\n            border-radius: 10px;\n            box-shadow: 0 10px 30px rgba(0,0,0,0.1);\n            transition: transform 0.5s;\n        }\n\n        .about-image img:hover {\n            transform: scale(1.05);\n        }\n\n        .stats {\n            display: flex;\n            justify-content: space-around;\n            margin-top: 3rem;\n            text-align: center;\n        }\n\n        .stat-item {\n            padding: 1.5rem;\n            border-radius: 10px;\n            box-shadow: 0 5px 15px rgba(0,0,0,0.05);\n            background-color: #fff;\n            transition: transform 0.3s;\n        }\n\n        .dark-mode .stat-item {\n            background-color: #2d2d2d;\n        }\n\n        .stat-item:hover {\n            transform: translateY(-10px);\n        }\n\n        .stat-number {\n            font-size: 2.5rem;\n            font-weight: bold;\n            color: var(--primary-color);\n            margin-bottom: 0.5rem;\n        }\n\n        .skills {\n            padding: 6rem 0;\n            background-color: #f9f9f9;\n            position: relative;\n        }\n\n        .dark-mode .skills {\n            background-color: #1a1a1a;\n        }\n\n        .skills-container {\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            gap: 2rem;\n        }\n\n        .skill-card {\n            background-color: white;\n            border-radius: 10px;\n            padding: 2rem;\n            width: 300px;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.05);\n            text-align: center;\n            transition: all var(--transition-speed);\n            position: relative;\n            overflow: hidden;\n        }\n\n        .skill-card:hover {\n            transform: translateY(-10px);\n            box-shadow: 0 15px 30px rgba(0,0,0,0.1);\n        }\n\n        .skill-card:before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));\n        }\n\n        .skill-icon {\n            font-size: 3rem;\n            margin-bottom: 1.5rem;\n            color: var(--primary-color);\n        }\n\n        .skill-card h3 {\n            margin-bottom: 1rem;\n            color: var(--primary-color);\n            font-size: 1.5rem;\n        }\n\n        .skill-card p {\n            color: var(--text-color);\n            font-size: 1rem;\n        }\n\n        .projects {\n            padding: 6rem 0;\n            background-color: white;\n        }\n\n        .dark-mode .projects {\n            background-color: #222;\n        }\n\n        .projects-container {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n            gap: 2rem;\n        }\n\n        .project-card {\n            background-color: #f9f9f9;\n            border-radius: 10px;\n            overflow: hidden;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.05);\n            transition: transform var(--transition-speed);\n        }\n\n        .project-card:hover {\n            transform: translateY(-10px);\n        }\n\n        .project-image {\n            height: 200px;\n            overflow: hidden;\n        }\n\n        .project-image img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            transition: transform 0.5s;\n        }\n\n        .project-card:hover .project-image img {\n            transform: scale(1.1);\n        }\n\n        .project-info {\n            padding: 1.5rem;\n        }\n\n        .project-info h3 {\n            margin-bottom: 0.5rem;\n            color: var(--primary-color);\n        }\n\n        .project-tags {\n            display: flex;\n            flex-wrap: wrap;\n            margin: 1rem 0;\n            gap: 0.5rem;\n        }\n\n        .project-tag {\n            background-color: rgba(74, 144, 226, 0.1);\n            color: var(--primary-color);\n            border-radius: 50px;\n            padding: 0.3rem 0.8rem;\n            font-size: 0.8rem;\n        }\n\n        .project-links {\n            display: flex;\n            gap: 1rem;\n            margin-top: 1rem;\n        }\n\n        .project-link {\n            display: inline-block;\n            padding: 0.5rem 1rem;\n            border-radius: 5px;\n            text-decoration: none;\n            font-weight: 500;\n            font-size: 0.9rem;\n            transition: all var(--transition-speed);\n        }\n\n        .view-link {\n            background-color: var(--primary-color);\n            color: white;\n        }\n\n        .code-link {\n            background-color: #f1f1f1;\n            color: var(--dark-color);\n        }\n\n        .dark-mode .code-link {\n            background-color: #444;\n            color: #fff;\n        }\n\n        .timeline {\n            padding: 6rem 0;\n            background-color: #f9f9f9;\n        }\n\n        .dark-mode .timeline {\n            background-color: #1a1a1a;\n        }\n\n        .timeline-container {\n            max-width: 800px;\n            margin: 0 auto;\n            position: relative;\n        }\n\n        .timeline-container::before {\n            content: '';\n            position: absolute;\n            width: 3px;\n            background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));\n            top: 0;\n            bottom: 0;\n            left: 50%;\n            transform: translateX(-50%);\n            border-radius: 10px;\n        }\n\n        .timeline-item {\n            padding: 1.5rem;\n            background-color: white;\n            border-radius: 10px;\n            box-shadow: 0 5px 15px rgba(0,0,0,0.05);\n            width: calc(50% - 30px);\n            position: relative;\n            margin: 2rem 0;\n        }\n\n        .timeline-item:nth-child(odd) {\n            float: left;\n            clear: right;\n        }\n\n        .timeline-item:nth-child(even) {\n            float: right;\n            clear: left;\n        }\n\n        .timeline-item::before {\n            content: '';\n            position: absolute;\n            width: 20px;\n            height: 20px;\n            background-color: white;\n            border: 4px solid var(--primary-color);\n            border-radius: 50%;\n            top: 20px;\n        }\n\n        .timeline-item:nth-child(odd)::before {\n            right: -44px;\n        }\n\n        .timeline-item:nth-child(even)::before {\n            left: -44px;\n        }\n\n        .timeline-date {\n            display: inline-block;\n            padding: 0.3rem 1rem;\n            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));\n            color: white;\n            border-radius: 20px;\n            font-size: 0.8rem;\n            margin-bottom: 0.5rem;\n        }\n\n        .timeline-item h3 {\n            margin-bottom: 0.5rem;\n            color: var(--primary-color);\n        }\n\n        .testimonials {\n            padding: 6rem 0;\n            background-color: white;\n        }\n\n        .dark-mode .testimonials {\n            background-color: #222;\n        }\n\n        .testimonials-container {\n            display: flex;\n            gap: 2rem;\n            overflow-x: auto;\n            padding: 2rem 0;\n            scroll-snap-type: x mandatory;\n            scroll-behavior: smooth;\n        }\n\n        .testimonial-card {\n            flex: 0 0 auto;\n            width: 400px;\n            background-color: #f9f9f9;\n            border-radius: 10px;\n            padding: 2rem;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.05);\n            scroll-snap-align: start;\n            position: relative;\n        }\n\n        .dark-mode .testimonial-card {\n            background-color: #2d2d2d;\n        }\n\n        .testimonial-card:before {\n            content: '\\201C';\n            position: absolute;\n            top: 10px;\n            left: 20px;\n            font-size: 5rem;\n            color: rgba(74, 144, 226, 0.1);\n            font-family: Georgia, serif;\n        }\n\n        .testimonial-text {\n            margin-bottom: 1.5rem;\n            font-style: italic;\n        }\n\n        .testimonial-author {\n            display: flex;\n            align-items: center;\n        }\n\n        .testimonial-avatar {\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            margin-right: 1rem;\n            object-fit: cover;\n        }\n\n        .testimonial-info h4 {\n            margin-bottom: 0.2rem;\n            color: var(--primary-color);\n        }\n\n        .testimonial-info p {\n            font-size: 0.9rem;\n            color: #777;\n        }\n\n        .contact {\n            padding: 6rem 0;\n            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));\n            color: white;\n            clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);\n        }\n\n        .contact-container {\n            display: flex;\n            gap: 4rem;\n            align-items: flex-start;\n        }\n\n        .contact-info {\n            flex: 1;\n        }\n\n        .contact-form {\n            flex: 2;\n            background-color: white;\n            padding: 2rem;\n            border-radius: 10px;\n            box-shadow: 0 15px 30px rgba(0,0,0,0.1);\n        }\n\n        .form-group {\n            margin-bottom: 1.5rem;\n        }\n\n        .form-label {\n            display: block;\n            margin-bottom: 0.5rem;\n            color: var(--dark-color);\n            font-weight: 500;\n        }\n\n        .form-control {\n            width: 100%;\n            padding: 0.8rem;\n            border: 1px solid #ddd;\n            border-radius: 5px;\n            font-size: 1rem;\n            transition: border-color var(--transition-speed);\n        }\n\n        .form-control:focus {\n            outline: none;\n            border-color: var(--primary-color);\n        }\n\n        .form-row {\n            display: flex;\n            gap: 1rem;\n        }\n\n        .form-row .form-group {\n            flex: 1;\n        }\n\n        .submit-btn {\n            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));\n            color: white;\n            border: none;\n            padding: 1rem 2rem;\n            border-radius: 50px;\n            font-size: 1rem;\n            font-weight: 500;\n            cursor: pointer;\n            transition: all var(--transition-speed);\n            width: 100%;\n        }\n\n        .submit-btn:hover {\n            transform: translateY(-3px);\n            box-shadow: 0 10px 20px rgba(0,0,0,0.1);\n        }\n\n        .submit-btn:active {\n            transform: translateY(-1px);\n        }\n\n        .contact-method {\n            display: flex;\n            align-items: center;\n            margin-bottom: 1.5rem;\n        }\n\n        .contact-icon {\n            width: 50px;\n            height: 50px;\n            background-color: rgba(255,255,255,0.1);\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-right: 1rem;\n            font-size: 1.2rem;\n        }\n\n        footer {\n            background-color: var(--dark-color);\n            color: white;\n            padding: 4rem 0 2rem;\n            text-align: center;\n        }\n\n        .footer-content {\n            display: flex;\n            justify-content: space-between;\n            align-items: flex-start;\n            flex-wrap: wrap;\n            gap: 2rem;\n            margin-bottom: 3rem;\n        }\n\n        .footer-section {\n            flex: 1;\n            min-width: 200px;\n        }\n\n        .footer-section h3 {\n            margin-bottom: 1.5rem;\n            color: var(--primary-color);\n        }\n\n        .footer-links {\n            list-style: none;\n        }\n\n        .footer-links li {\n            margin-bottom: 0.8rem;\n        }\n\n        .footer-links a {\n            color: #ddd;\n            text-decoration: none;\n            transition: color var(--transition-speed);\n        }\n\n        .footer-links a:hover {\n            color: var(--primary-color);\n        }\n\n        .social-links {\n            display: flex;\n            justify-content: center;\n            gap: 1rem;\n            margin-top: 1rem;\n        }\n\n        .social-link {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 40px;\n            height: 40px;\n            background-color: rgba(255,255,255,0.1);\n            border-radius: 50%;\n            color: white;\n            font-size: 1.2rem;\n            transition: all var(--transition-speed);\n        }\n\n        .social-link:hover {\n            background-color: var(--primary-color);\n            transform: translateY(-3px);\n        }\n\n        .copyright {\n            border-top: 1px solid rgba(255,255,255,0.1);\n            padding-top: 2rem;\n            font-size: 0.9rem;\n            color: #aaa;\n        }\n\n        .back-to-top {\n            position: fixed;\n            bottom: 30px;\n            right: 30px;\n            width: 50px;\n            height: 50px;\n            background-color: var(--primary-color);\n            color: white;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 1.2rem;\n            box-shadow: 0 5px 15px rgba(0,0,0,0.1);\n            transition: all var(--transition-speed);\n            opacity: 0;\n            visibility: hidden;\n            z-index: 100;\n        }\n\n        .back-to-top.visible {\n            opacity: 1;\n            visibility: visible;\n        }\n\n        .back-to-top:hover {\n            background-color: var(--secondary-color);\n            transform: translateY(-3px);\n        }\n\n        /* Animation classes */\n        .fade-in {\n            opacity: 0;\n            transform: translateY(20px);\n            transition: opacity 0.6s ease, transform 0.6s ease;\n        }\n\n        .fade-in.visible {\n            opacity: 1;\n            transform: translateY(0);\n        }\n\n        /* Responsive styles */\n        @media (max-width: 992px) {\n            .about-content {\n                flex-direction: column;\n                gap: 3rem;\n            }\n\n            .timeline-container::before {\n                left: 30px;\n            }\n\n            .timeline-item {\n                width: calc(100% - 60px);\n                float: right;\n                clear: both;\n            }\n\n            .timeline-item::before {\n                left: -34px;\n            }\n\n            .timeline-item:nth-child(odd)::before {\n                right: auto;\n                left: -34px;\n            }\n\n            .contact-container {\n                flex-direction: column;\n            }\n        }\n\n        @media (max-width: 768px) {\n            .navbar .nav-links {\n                position: fixed;\n                top: 0;\n                right: -100%;\n                width: 70%;\n                height: 100vh;\n                background-color: white;\n                flex-direction: column;\n                align-items: center;\n                justify-content: center;\n                transition: right 0.3s ease;\n                box-shadow: -5px 0 15px rgba(0,0,0,0.1);\n            }\n\n            .dark-mode .navbar .nav-links {\n                background-color: #222;\n            }\n\n            .navbar .nav-links.active {\n                right: 0;\n            }\n\n            .navbar .nav-links li {\n                margin: 1.5rem 0;\n            }\n\n            .mobile-toggle {\n                display: block;\n            }\n\n            .hero h1 {\n                font-size: 2.5rem;\n            }\n\n            .hero p {\n                font-size: 1.1rem;\n            }\n\n            .section-title {\n                font-size: 2rem;\n            }\n\n            .projects-container {\n                grid-template-columns: 1fr;\n            }\n\n            .stats {\n                flex-direction: column;\n                gap: 1.5rem;\n            }\n\n            .footer-content {\n                flex-direction: column;\n                text-align: center;\n            }\n\n            .form-row {\n                flex-direction: column;\n            }\n        }\n\n        @media (max-width: 480px) {\n            .hero h1 {\n                font-size: 2rem;\n            }\n\n            .skill-card {\n                width: 100%;\n            }\n\n            .testimonial-card {\n                width: 100%;\n            }\n        }\n    " }} />
                <nav className="navbar">
                    <div className="nav-container">
                        <a href="#" className="logo">Developer.</a>
                        <button className="mobile-toggle" id="mobile-toggle">
                            <i className="fas fa-bars" />
                        </button>
                        <ul className="nav-links" id="nav-links">
                            <li><a href="#about">Обо мне</a></li>
                            <li><a href="#skills">Навыки</a></li>
                            <li><a href="#projects">Проекты</a></li>
                            <li><a href="#contact">Контакты</a></li>
                            <li>
                                <button className="theme-toggle" id="theme-toggle">
                                    <i className="fas fa-moon" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <header>
                    <div className="container">
                        <h1>Портфолио разработчика</h1>
                    </div>
                </header>
                <section className="hero">
                    <div className="container">
                        <h1 id="typed-text">Привет, я веб-разработчик</h1>
                        <p>Создаю современные, отзывчивые и функциональные веб-сайты и приложения. Моя цель — воплощать ваши идеи в цифровую реальность.</p>
                        <a href="#contact" className="cta-button">Связаться со мной</a>
                    </div>
                </section>
                <section className="about" id="about">
                    <div className="container">
                        <h2 className="section-title fade-in">Обо мне</h2>
                        <div className="about-content">
                            <div className="about-text fade-in">
                                <p>Я опытный веб-разработчик с более чем 5-летним опытом создания современных веб-приложений. Мой подход сочетает в себе креативность дизайнера и техническую точность программиста.</p>
                                <p>Моя страсть к веб-разработке началась еще в университете, и с тех пор я постоянно совершенствую свои навыки, чтобы создавать продукты, которые не только функциональны, но и красивы.</p>
                                <div className="stats">
                                    <div className="stat-item">
                                        <div className="stat-number" id="years-count">5+</div>
                                        <div>Лет опыта</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number" id="projects-count">50+</div>
                                        <div>Проектов</div>
                                    </div>
                                    <div className="stat-item">
                                        <div className="stat-number" id="clients-count">30+</div>
                                        <div>Клиентов</div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-image fade-in">
                                <img src="https://via.placeholder.com/400x300" alt="Портрет разработчика" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="skills" id="skills">
                    <div className="container">
                        <h2 className="section-title fade-in">Мои навыки</h2>
                        <div className="skills-container">
                            <div className="skill-card fade-in">
                                <div className="skill-icon">
                                    <i className="fas fa-code" />
                                </div>
                                <h3>Front-end разработка</h3>
                                <p>HTML, CSS, JavaScript, React, Vue.js и другие современные фреймворки для создания красивых и функциональных интерфейсов.</p>
                            </div>
                            <div className="skill-card fade-in">
                                <div className="skill-icon">
                                    <i className="fas fa-server" />
                                </div>
                                <h3>Back-end разработка</h3>
                                <p>Node.js, PHP, Python, SQL и NoSQL базы данных для создания надежной серверной логики.</p>
                            </div>
                            <div className="skill-card fade-in">
                                <div className="skill-icon">
                                    <i className="fas fa-paint-brush" />
                                </div>
                                <h3>UX/UI дизайн</h3>
                                <p>Создание удобных и привлекательных интерфейсов, которые нравятся пользователям и решают бизнес-задачи.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projects" id="projects">
                    <div className="container">
                        <h2 className="section-title fade-in">Мои проекты</h2>
                        <div className="projects-container">
                            <div className="project-card fade-in">
                                <div className="project-image">
                                    <img src="https://via.placeholder.com/400x200" alt="Проект 1" />
                                </div>
                                <div className="project-info">
                                    <h3>Веб-приложение для управления задачами</h3>
                                    <p>Современное приложение для организации рабочего процесса с функциями командной работы.</p>
                                    <div className="project-tags">
                                        <span className="project-tag">React</span>
                                        <span className="project-tag">Node.js</span>
                                        <span className="project-tag">MongoDB</span>
                                    </div>
                                    <div className="project-links">
                                        <a href="#" className="project-link view-link">Просмотр</a>
                                        <a href="#" className="project-link code-link">Код</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-card fade-in">
                                <div className="project-image">
                                    <img src="https://via.placeholder.com/400x200" alt="Проект 2" />
                                </div>
                                <div className="project-info">
                                    <h3>Интернет-магазин</h3>
                                    <p>Полнофункциональный интернет-магазин с адаптивным дизайном и интеграцией платежных систем.</p>
                                    <div className="project-tags">
                                        <span className="project-tag">Vue.js</span>
                                        <span className="project-tag">Laravel</span>
                                        <span className="project-tag">MySQL</span>
                                    </div>
                                    <div className="project-links">
                                        <a href="#" className="project-link view-link">Просмотр</a>
                                        <a href="#" className="project-link code-link">Код</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact" id="contact">
                    <div className="container">
                        <h2 className="section-title fade-in">Связаться со мной</h2>
                        <div className="contact-container">
                            <div className="contact-info fade-in">
                                <p>Готов обсудить ваш проект и предложить лучшее решение. Свяжитесь со мной любым удобным способом.</p>
                                <div className="contact-methods">
                                    <div className="contact-method">
                                        <div className="contact-icon">
                                            <i className="fas fa-envelope" />
                                        </div>
                                        <div>
                                            <h4>Email</h4>
                                            <p>contact@example.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-method">
                                        <div className="contact-icon">
                                            <i className="fas fa-phone" />
                                        </div>
                                        <div>
                                            <h4>Телефон</h4>
                                            <p>+7 (999) 123-45-67</p>
                                        </div>
                                    </div>
                                    <div className="contact-method">
                                        <div className="contact-icon">
                                            <i className="fas fa-map-marker-alt" />
                                        </div>
                                        <div>
                                            <h4>Локация</h4>
                                            <p>Москва, Россия</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form fade-in">
                                <form id="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">Имя</label>
                                            <input type="text" id="name" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" id="email" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject" className="form-label">Тема</label>
                                        <input type="text" id="subject" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">Сообщение</label>
                                        <textarea id="message" className="form-control" rows={5} required defaultValue={""} />
                                    </div>
                                    <button type="submit" className="submit-btn">Отправить сообщение</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-section">
                                <h3>Developer.</h3>
                                <p>Создаю современные веб-решения для бизнеса и частных клиентов.</p>
                                <div className="social-links">
                                    <a href="#" className="social-link"><i className="fab fa-github" /></a>
                                    <a href="#" className="social-link"><i className="fab fa-linkedin" /></a>
                                    <a href="#" className="social-link"><i className="fab fa-twitter" /></a>
                                    <a href="#" className="social-link"><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                            <div className="footer-section">
                                <h3>Быстрые ссылки</h3>
                                <ul className="footer-links">
                                    <li><a href="#about">Обо мне</a></li>
                                    <li><a href="#skills">Навыки</a></li>
                                    <li><a href="#projects">Проекты</a></li>
                                    <li><a href="#contact">Контакты</a></li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h3>Услуги</h3>
                                <ul className="footer-links">
                                    <li><a href="#">Веб-разработка</a></li>
                                    <li><a href="#">Мобильная разработка</a></li>
                                    <li><a href="#">UI/UX дизайн</a></li>
                                    <li><a href="#">Консультации</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="copyright">
                            <p>© 2023 Developer. Все права защищены.</p>
                        </div>
                    </div>
                </footer>
                <a href="#" className="back-to-top" id="back-to-top">
                    <i className="fas fa-arrow-up" />
                </a>
            </div>
        );
    }
});