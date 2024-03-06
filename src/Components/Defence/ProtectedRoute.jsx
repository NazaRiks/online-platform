import {Navigate} from "react-router-dom";
import AdminMenu from "../Contents/admin-menu/admin-menu.jsx";

export default function ProtectedRoute({ component: Component, isTokenValid, isAdmin = false, ...rest }) {

    return isTokenValid ? <Component {...rest} /> : <Navigate to="/auth" />;
}