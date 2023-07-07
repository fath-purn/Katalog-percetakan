import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function IfLogged () {
    const [isLogged, setLogged] = useState(false);
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setLogged(false);
        }
    }, []);

    if(!isLogged)
        return <Navigate to="/login" replace={true} />;

    return isLogged;
}