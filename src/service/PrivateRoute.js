import { Navigate, Outlet } from "react-router-dom";


export default function PrivateRoute({ children, isLogged }) {
    return isLogged ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace={true} />
    );
}