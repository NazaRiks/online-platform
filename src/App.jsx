// App.jsx
import React, {Component, useState} from 'react';
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
import axios from "axios";
import ProtectedRoute from "./Components/Defence/ProtectedRoute.jsx";
import CourseObject from "./Components/Contents/Courses/CourseObject.jsx";
import ForumObject from "./Components/Contents/Forums/ForumObject.jsx";


export default function App() {
    const [isTokenValid, setIsTokenValid] = useState(false);
    const [userName, setUserName] = useState("Увiйти");
    axios.get("http://localhost:5173/auth/isTokenValid", {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }).then(response => {
        setIsTokenValid(response.data);
    }).catch(error => console.error('Error fetching data:', error)
    );
    axios.get("http://localhost:5173/auth/getUsername", {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    }).then(response => {
        setUserName(response.data);
    }).catch(error => console.error('Error fetching data:', error)
    );


    return (
        <div className="app-container">
            <BrowserRouter>
                {isTokenValid && <Header isAuthorization={isTokenValid} userName={userName} />}
                <Routes>
                    <Route path="/auth" element={<ProtectedRoute isTokenValid={isTokenValid} component={WelcomePage} />} />
                    <Route path="/" element={<ProtectedRoute isTokenValid={isTokenValid} component={WelcomePage} />} />
                    <Route path="/education" element={<ProtectedRoute isTokenValid={isTokenValid} component={MyEducationPage} />} />
                    <Route path="/courses" element={<ProtectedRoute isTokenValid={isTokenValid} component={CoursePage} />} />
                    <Route path="/statistic" element={<ProtectedRoute isTokenValid={isTokenValid} component={MyStatisticsPage} />} />
                    <Route path="/forums" element={<ProtectedRoute isTokenValid={isTokenValid} component={ForumPage} />} />
                    <Route path="/register" element={<ProtectedRoute isTokenValid={isTokenValid} component={RegisterPage} />} />
                    <Route path="/courses/course-object" element={<ProtectedRoute isTokenValid={isTokenValid} component={CourseObject} />}/>
                    <Route path="/forums/forum-object" element={<ProtectedRoute isTokenValid={isTokenValid} component={ForumObject} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}