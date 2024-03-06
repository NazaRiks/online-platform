// App.jsx
import React, {Component, useEffect, useState} from 'react';
import Header from "./Components/Header/Header.jsx";
import './App.css';
import WelcomePage from "./Components/Contents/Welcome/WelcomePage.jsx";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AuthorizationPage from "./Components/Contents/Authorizations/AuthorizationPage.jsx";
import MyEducationPage from "./Components/Contents/Educations/MyEducationPage.jsx";
import MyStatisticsPage from "./Components/Contents/Statistics/MyStatisticPage.jsx";
import ForumPage from "./Components/Contents/Forums/ForumPage.jsx";
import CoursePage from "./Components/Contents/Courses/CoursePage.jsx";
import RegisterPage from "./Components/Contents/register/register-page.jsx";
import axios from "axios";
import ProtectedRoute from "./Components/Defence/ProtectedRoute.jsx";
import AdminMenu from "./Components/Contents/admin-menu/admin-menu.jsx";
import CourseObject from "./Components/Contents/Courses/CourseObject.jsx";
import ForumObject from "./Components/Contents/Forums/ForumObject.jsx";


export default function App() {
    const [isTokenValid, setIsTokenValid] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if(localStorage.getItem("token") === null) return setIsTokenValid(false);
        axios.get("http://localhost:8080/auth/isTokenValid", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => {
            setIsTokenValid(response.data);
        }).catch(error => console.error('Error fetching data:', error)
        );
    }, []);

    useEffect(() => {
        if(localStorage.getItem("token") === null) return setIsAdmin(false);
        axios.get("http://localhost:8080/auth/isAdmin", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => {
            setIsAdmin(response.data);
        }).catch(error => console.error('Error fetching data:', error));
    });



    return (
        <div className="app-container">
            <BrowserRouter>
                {isTokenValid && <Header isAdmin={isAdmin} />}
                <Routes>
                    <Route path="/auth" element={isTokenValid ? <Navigate to="/" /> : <AuthorizationPage />} />
                    <Route path="/" element={<ProtectedRoute isTokenValid={isTokenValid} component={WelcomePage} />} />
                    <Route path="/education" element={<ProtectedRoute isTokenValid={isTokenValid} component={MyEducationPage} />} />
                    <Route path="/courses" element={<ProtectedRoute isTokenValid={isTokenValid} component={CoursePage} />} />
                    <Route path="/courses/course-object" element={<ProtectedRoute isTokenValid={isTokenValid} component={CourseObject} />} />
                    <Route path="/courses" element={<ProtectedRoute isTokenValid={isTokenValid} component={CoursePage} />} />
                    <Route path="/statistic" element={<ProtectedRoute isTokenValid={isTokenValid} component={MyStatisticsPage} />} />
                    <Route path="/forums" element={<ProtectedRoute isTokenValid={isTokenValid} component={ForumPage} />} />
                    <Route path="/forums/forum-object" element={<ProtectedRoute isTokenValid={isTokenValid} component={ForumObject} />} />
                    <Route path="/admin" element={<ProtectedRoute isTokenValid={isAdmin && isTokenValid} component={AdminMenu} />} />
                    <Route path="/register" element={isTokenValid ? <Navigate to="/" /> : <RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}