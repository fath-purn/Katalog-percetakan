import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import axios from "axios";

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        axios.post("http://localhost:3000/login", { username, password })
            .then((response) => {
                // Handle successful login
                localStorage.setItem("token", response.data.token);
                console.log(localStorage.getItem("token"));
                navigate(`/admin`);
            })
            .catch((error) => {
                // Handle login error
                console.error(error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    // mengecek apakah admin sudah login atau belum
    const [isLogged, setLogged] = useState(!!localStorage.getItem("token"));
    const [isOpen, setIsOpen] = useState(false);

    if (isLogged) {
        return <Navigate to="/admin" replace={true} />;
    }

    if(!isLogged)
        return (
            <div className=" flex relative bg-gradient-to-r h-screen w-screen py-10 from-fuchsia-600 to-pink-600">
                <div className=" max-md:w-[90%] md:w-[70%] lg:w-[50%] bg-white rounded-md py-14 px-10 shadow-lg m-auto flex justify-center flex-col ">
                    <h1 className="text-center text-3xl mb-5">LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                disabled={isSubmitting}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                disabled={isSubmitting}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {isSubmitting ? "Logging in..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        );
};

export default LoginForm;
