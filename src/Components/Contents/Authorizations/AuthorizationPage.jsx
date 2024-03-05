import './AuthorizationPage.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

export default function AuthorizationPage() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function onLoginChange(event) {
        setUser({...user, username: event.target.value});
    }

    function onPasswordChange(event) {
        setUser({...user, password: event.target.value});
    }

    function handleLogin() {
        axios.post("http://localhost:8080/auth/login", user)
            .then(response => localStorage.setItem("token", response.data.token))
            .catch(error => console.error('Error fetching data:', error));
    }

    return (
        <div className="container">
            <form action="#" className="form" onSubmit={handleLogin}>
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" onChange={onLoginChange} value={user.username}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" onChange={onPasswordChange} value={user.password}/>
                </div>
                <button className="auth-btn" type="submit">Увійти</button>
                <p>Не створений аккаунт? <Link to="/register">Зареєструватися</Link></p>
            </form>
        </div>
    )
}