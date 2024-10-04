// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Update this path as needed
import Registration from './components/Registration'; // Update this path as needed
import Home from './components/Home'; // Import Home component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
    