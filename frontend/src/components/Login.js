import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.user.username);
            navigate('/home');
        } catch (err) {
            setError(err.response ? err.response.data.msg : 'Server error');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-600">
            <form onSubmit={handleLogin} className="w-full max-w-xs">
                <h2 className="mb-4 text-2xl text-center">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-5 p-2 border border-gray-300 rounded"
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
                <button type="submit" className="w-full mb-4 p-2 text-white bg-blue-500 rounded hover:bg-blue-700">
                    Login
                </button>
                <p className="mt-4 text-center">
                    Don't have an account?{' '}
                    <button onClick={() => navigate('/register')} className="text-blue-500 underline">
                        Register
                    </button>
                </p>
            </form>
        </div>
    );
};

export default Login;
