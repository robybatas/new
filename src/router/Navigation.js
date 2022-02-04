import { Navigate } from "react-router-dom";

export default function Navigation({ children }) {
    return children // (!localStorage.access_token ? <Navigate to='/login' /> : children)
}