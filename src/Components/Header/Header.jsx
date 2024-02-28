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
import anadaLogo from "../../Pictures/logomak_logo.png"

export default function Header({ changeMainRenderedPage, isAuthorization, userName }) {
    return (
        <nav className="header-nav">
            <div className="nav-buttons">
                <Button onClick={() => changeMainRenderedPage(<WelcomePage />)} className="nav-button logo-button">
                    <img src={anadaLogo} alt="Anada Logo" className="logo-img" />
                </Button>
                <Button onClick={() => changeMainRenderedPage(<MyEducationPage />)} className="nav-button">
                    Моя освіта
                </Button>
                <Button onClick={() => changeMainRenderedPage(<CoursePage />)} className="nav-button">
                    Курси
                </Button>
                <Button onClick={() => changeMainRenderedPage(<MyStatisticsPage />)} className="nav-button">
                    Моя статистика
                </Button>
                <Button onClick={() => changeMainRenderedPage(<ForumPage changeMainRenderedPage={changeMainRenderedPage} />)} className="nav-button">
                    Форуми
                </Button>
            </div>
            <div>
                <Button onClick={() => changeMainRenderedPage(<AuthorizationPage />)} className="user-button">
                    <div>
                        <img src={userLogo} alt="User" className="user-img" />
                        {isAuthorization ? <p>{userName}</p> : <p>Увійти</p>}
                    </div>
                </Button>
            </div>
        </nav>
    );
}