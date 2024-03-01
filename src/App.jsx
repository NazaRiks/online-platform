// App.jsx
import React, {useState} from 'react';
import Header from "./Components/Header/Header.jsx";
import './App.css';
import WelcomePage from "./Components/Contents/Welcome/WelcomePage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthorizationPage from "./Components/Contents/Authorizations/AuthorizationPage.jsx";


export default function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<WelcomePage/>}/>
                    <Route path="/auth" element={<AuthorizationPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}