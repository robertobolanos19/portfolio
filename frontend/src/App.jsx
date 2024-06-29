import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import './index.css'; // Import global styles

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* Placeholders for future pages */}
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
        </Router>
    );
}

export default App;
