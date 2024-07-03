import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectPage from './pages/Project/ProjectPage';
import axios from 'axios';

const App = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home projects={projects} />} />
                <Route path="/about" element={<About />} />
                <Route path="/project/:id" element={<ProjectPage projects={projects} />} />
            </Routes>
        </Router>
    );
};

export default App;
