// App.jsx
import React, { useState } from 'react';
import Header from "./Components/Header/Header.jsx";
import './App.css';
import WelcomePage from "./Components/Contents/Welcome/WelcomePage.jsx";


export default function App() {
    const [mainPage, setMainPage] = useState(<WelcomePage />);
    const changeMainRenderedPageHandler = (componetPage) => {
        setMainPage(componetPage);
    }


    return (
        <div className="app-container">
            <Header changeMainRenderedPage={changeMainRenderedPageHandler}/>
            {mainPage}
        </div>
    );
}