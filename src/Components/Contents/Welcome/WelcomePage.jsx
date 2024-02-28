import "./WelcomePage.css"
export default function WelcomePage() {
    const universities = [
        {
            name: "Київський національний університет імені Тараса Шевченка",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kiev_University_logo.svg/1200px-Kiev_University_logo.svg.png",
        },
        {
            name: "Львівський національний університет імені Івана Франка",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_of_Ivan_Franko_National_University_of_Lviv.svg/1200px-Logo_of_Ivan_Franko_National_University_of_Lviv.svg.png",
        },
        {
            name: "Національний технічний університет України «Київський політехнічний інститут імені Ігоря Сікорського»",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/KPI_logo.svg/1200px-KPI_logo.svg.png",
        },
    ];

    const features = [
        {
            icon: "fa fa-comments",
            title: "Форуми",
            description: "Спілкуйтеся з однодумцями та отримуйте допомогу в навчанні.",
        },
        {
            icon: "fa fa-book",
            title: "Курси",
            description: "Проходьте онлайн-курси та отримуйте нові знання.",
        },
        {
            icon: "fa fa-desktop",
            title: "Онлайн-навчання",
            description: "Навчайтеся в зручному для вас темпі та в будь-якому місці.",
        },
        {
            icon: "fa fa-bar-chart",
            title: "Аналітика",
            description: "Слідкуйте за своїм прогресом та отримуйте персоналізовані рекомендації.",
        },
    ];

    return (
        <div className="welcome-page-container">
            <div className="online-styding">
                <h1>Навчання онлайн</h1>
            </div>
            <div className="main-content">
                <section className="universities">
                    <h2>Наші партнери</h2>
                    <div className="universities-list">
                        {universities.map((university) => (
                            <div className="university-item" key={university.name}>
                                <img src={university.logo} alt={university.name} />
                                <h3>{university.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="features">
                    <h2>Можливості платформи</h2>
                    <div className="features-list">
                        {features.map((feature) => (
                            <div className="feature-item" key={feature.title}>
                                <i className={feature.icon}></i>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="call-to-action">
                    <h2>Розпочніть навчання вже зараз!</h2>
                    <button>Зареєструватися</button>
                </section>
            </div>
        </div>
    );
}
