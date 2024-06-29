import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
