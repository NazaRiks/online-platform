import './AuthorizationPage.css';
import {Link} from "react-router-dom";

export default function AuthorizationPage() {
    return (
        <div className="container">
            <form action="#" className="form">
                <div className="field">
                    <label htmlFor="">Login</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                </div>
                <button className="auth-btn">Увійти</button>
                <p>Не створений аккаунт? <Link to="/register">Зареєструватися</Link></p>
            </form>
        </div>
    )
}