// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-zinc-700 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold">
                    Tools
                </Link>
                <div className="space-x-4">
                    <Link to="/home" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
                        Home
                    </Link>
                    <Link to="/login"  className="text-white hover:bg-blue-600 px-3 py-2 rounded">
                        Login
                    </Link>
                    <Link to="/register" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
                        Register
                    </Link>
                    <Link to="/posts" className="text-white hover:bg-blue-600 px-3 py-2 rounded">
                        Posts
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
