import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectPage from './pages/Project/ProjectPage';
import axios from 'axios';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://portfolio-11-8t3r.onrender.com/projects') // Ensure this URL matches your Render URL
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching data:', error.response ? error.response.data : error.message));
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


/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import {  Routes, Route, HashRouter } from "react-router-dom"; /* BrowserRouter, /
import './index.scss';
import App from './App';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage/NoPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="" element={<NoPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
*/