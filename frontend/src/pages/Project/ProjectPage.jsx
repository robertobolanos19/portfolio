import React from 'react';
import { useParams } from 'react-router-dom';
import Model from '../../components/Model/Model';
import Navbar from '../../components/Navbar/Navbar'
import Section1 from './components/Section1';
import './ProjectPage.css';

const ProjectPage = ({ projects }) => {
    const { id } = useParams();
    const project = projects.find(proj => proj.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-page">
            <Navbar/>
            <Model modelPath={project.model} info={project} />
            <Section1 images={[project.image, project.image, project.image]} />
        </div>
    );
};

export default ProjectPage;
