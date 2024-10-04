// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('token');  // Remove token
        localStorage.removeItem('username'); // Remove username
        navigate('/login'); // Redirect to login page
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-300">
                <h1 className="text-4xl font-bold">Welcome {username}!</h1>
                <p className="mt-4 text-lg">This is the home page where you can see all your posts and updates.</p>
                <button
                    onClick={handleLogout}
                    className="mt-4 p-2 text-white bg-red-500 rounded hover:bg-red-700"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;
