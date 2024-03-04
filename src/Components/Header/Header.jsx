import React from 'react';
import Button from "../Button/Button.jsx";
import MyEducationPage from "../Contents/Educations/MyEducationPage.jsx";
import CoursePage from "../Contents/Courses/CoursePage.jsx";
import MyStatisticsPage from "../Contents/Statistics/MyStatisticPage.jsx";
import ForumPage from "../Contents/Forums/ForumPage.jsx";
import AuthorizationPage from "../Contents/Authorizations/AuthorizationPage.jsx";
import WelcomePage from "../Contents/Welcome/WelcomePage.jsx";
import './Header.css';
import userLogo from "../../Pictures/user.svg";
import logo from "../../Pictures/logo.svg"
import { Link } from 'react-router-dom';
export default function Header({isAuthorization, userName }) {
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
            </div>
            <div>
                <Link to="/auth"><Button className="user-button">
                    <div className="user-logo-text-container">
                        <img src={userLogo} alt="User" className="user-logo" />
                        <p className="autorization-text"> {isAuthorization ? <p>{userName}</p> : <p>Увійти</p>}</p>
                    </div>
                </Button></Link>
            </div>
        </nav>
    );
}
