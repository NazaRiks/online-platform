import "./WelcomePage.css"
import knu from "../../..//Pictures/gerb-removebg-preview.png"
import course from "../../../Pictures/course.svg"
import analysis from  "../../../Pictures/analysis.svg"
import forum from  "../../../Pictures/forum.svg"
import study from "../../../Pictures/study.svg"
import {Outlet} from "react-router-dom";
export default function WelcomePage() {
    const universities = [
        {
            name: "КНУ",
            logo: knu,
        },
        {
            name: "НАУ",
            logo: "https://pdp.nacs.gov.ua/system/providers/logos/000/000/128/original/Emblem_of_National_Aviation_University.png?1652096630"
        },
        {
            name: "КПІ",
            logo: "https://kpi.ua/files/images-page/kpi-big-logo.png"
        },
    ];

    const features = [
        {
            icon: forum,
            title: "Форуми",
            description: "Спілкуйтеся з однодумцями та отримуйте допомогу в навчанні.",
        },
        {
            icon: course,
            title: "Курси",
            description: "Проходьте онлайн-курси та отримуйте нові знання.",
        },
        {
            icon: study,
            title: "Онлайн-навчання",
            description: "Навчайтеся в зручному для вас темпі та в будь-якому місці.",
        },
        {
            icon: analysis,
            title: "Аналітика",
            description: "Слідкуйте за своїм прогресом та отримуйте персоналізовані рекомендації.",
        },
    ];

    return (
        <div className="welcome-page-container">
            <div className="online-styding">
                <h1>Навчання онлайн</h1>
            </div>
            <section className="call-to-action">
                <h2>Розпочніть навчання вже зараз!</h2>
                <button>Зареєструватися</button>
            </section>
            <div className="main-content">
                <section className="universities">
                    <h2>Наші партнери</h2>
                    <div className="universities-list">
                        {universities.map((university) => (
                            <div className="university-item" key={university.name}>
                                <img src={university.logo} alt={university.name}/>
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
                                <img src={feature.icon} alt={feature.title}/>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

        </div>
    );
}
