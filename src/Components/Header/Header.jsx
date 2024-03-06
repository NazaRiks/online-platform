import React, {useEffect, useState} from 'react';
import Button from "../Button/Button.jsx";
import './Header.css';
import userLogo from "../../Pictures/user.svg";
import logo from "../../Pictures/logo.svg"
import { Link } from 'react-router-dom';
import axios from "axios";
export default function Header({isAdmin}) {
    const [username, setUsername] = useState(null);
    useEffect(() => {
        if(localStorage.getItem("token") === null) return setUsername(null);
        axios.get("http://localhost:8080/auth/getUsername", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => {
            setUsername(response.data);
        }).catch(error => console.error('Error fetching data:', error)
        );
    },[]);

    function logOut() {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <nav className="header-nav">
            <div className="nav-buttons">
                <Link to="/"><Button className="nav-button logo-button">
                    <img src={logo} alt="Anada Logo" className="logo-img" />
                    <p className="logo-text">Smart Learning</p>
                </Button></Link>
                <Link to="/education"><Button className="nav-button">
                    Моя освіта
                </Button></Link>
                <Link to="/courses"><Button className="nav-button">
                    Курси
                </Button></Link>
                <Link to="/statistic"><Button className="nav-button">
                    Моя статистика
                </Button></Link>
                <Link to="/forums"><Button className="nav-button">
                    Форуми
                </Button></Link>
                {isAdmin && <Link to="/admin"><Button className="nav-button">
                    Адмін панель
                </Button></Link>}
            </div>
            <div>
                <Link to="/auth"><Button className="user-button">
                    <div className="user-logo-text-container">
                        <img src={userLogo} alt="User" className="user-logo" />
                        <p className="autorization-text"> {<p>{username}</p>}</p>
                    </div>
                    <div className="popup">
                        <Link to="/auth"><Button onClick={logOut} className="popup-button">
                            Вийти
                        </Button></Link>
                    </div>
                </Button></Link>
            </div>
        </nav>
    );
}
