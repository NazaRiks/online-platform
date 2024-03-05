import {Navigate} from "react-router-dom";

export default function ProtectedRoute({ component: Component, isTokenValid, ...rest }) {
    return isTokenValid ? <Component {...rest} /> : <Navigate to="/auth" />;
}