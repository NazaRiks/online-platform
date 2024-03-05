import "./WelcomePage.css"
import {useEffect, useState} from "react";

export default function WelcomePage() {
    const [universities, setUniversities] = useState([]);
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch("src/Data's/features.json")
            .then(response => response.json())
            .then(data => setFeatures(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {
        fetch("src/Data's/universities.json")
            .then(response => response.json())
            .then(data => setUniversities(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
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
                        {universities.map((university, index) => (
                            <div className="university-item" key={index}>
                                <img src={university.logo} alt={university.name}/>
                                <h3>{university.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="features">
                    <h2>Можливості платформи</h2>
                    <div className="features-list">
                        {features.map((feature, index) => (
                            <div className="feature-item" key={index}>
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
