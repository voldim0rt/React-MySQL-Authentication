import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', { username, email, password });
            navigate('/login');
        } catch (err) {
            setError(err.response ? err.response.data.msg : 'Server error');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleRegister} className="w-full max-w-xs">
                <h2 className="mb-4 text-2xl text-center">Register</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded"
                    required
                />
                <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                    Register
                </button>
                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <button onClick={() => navigate('/login')} className="text-blue-500 underline">
                        Login
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Registration;
