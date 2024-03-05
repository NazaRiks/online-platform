// App.jsx
import React, {useState} from 'react';
import Header from "./Components/Header/Header.jsx";
import './App.css';
import WelcomePage from "./Components/Contents/Welcome/WelcomePage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthorizationPage from "./Components/Contents/Authorizations/AuthorizationPage.jsx";
import MyEducationPage from "./Components/Contents/Educations/MyEducationPage.jsx";
import MyStatisticsPage from "./Components/Contents/Statistics/MyStatisticPage.jsx";
import ForumPage from "./Components/Contents/Forums/ForumPage.jsx";
import CoursePage from "./Components/Contents/Courses/CoursePage.jsx";
import RegisterPage from "./Components/Contents/register/register-page.jsx";


export default function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<WelcomePage />}/>
                    <Route path="/auth" element={<AuthorizationPage />}/>
                    <Route path="/education" element={<MyEducationPage />}/>
                    <Route path="/courses" element={<CoursePage />}/>
                    <Route path="/statistic" element={<MyStatisticsPage/>}/>
                    <Route path="/forums" element={<ForumPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}