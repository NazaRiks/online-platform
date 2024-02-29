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

export default function Header({ changeMainRenderedPage, isAuthorization, userName }) {
    return (
        <nav className="header-nav">
            <div className="nav-buttons">
                <Button onClick={() => changeMainRenderedPage(<WelcomePage />)} className="nav-button logo-button">
                    <img src={logo} alt="Anada Logo" className="logo-img" />
                    <p className="logo-text">Smart Learning</p>
                </Button>
                <Button onClick={() => changeMainRenderedPage(<MyEducationPage changeMainRenderedPage={changeMainRenderedPage}/>)} className="nav-button">
                    Моя освіта
                </Button>
                <Button onClick={() => changeMainRenderedPage(<CoursePage changeMainRenderedPage={changeMainRenderedPage}/>)} className="nav-button">
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
                    <div className="user-logo-text-container">
                        <img src={userLogo} alt="User" className="user-logo" />
                        <p className="autorization-text"> {isAuthorization ? <p>{userName}</p> : <p>Увійти</p>}</p>

                    </div>
                </Button>
            </div>
        </nav>
    );
}
