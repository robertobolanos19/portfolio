import React from 'react';
import { useParams } from 'react-router-dom';
import Model from '../../components/Model/Model';
import Navbar from '../../components/Navbar/Navbar';
import Section1 from './components/Section1';
import './ProjectPage.css';

const ProjectPage = ({ projects }) => {
  const { id } = useParams();
  console.log('Project ID from URL:', id, typeof id);
  console.log('Projects:', projects);

  const project = projects.find(proj => {
    console.log('Comparing:', proj._id, typeof proj._id);
    return proj._id === id || proj._id === parseInt(id);
  });
  console.log('Matched Project:', project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <Navbar />
      <Model modelPath={project.model} info={project} />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Section1 images={project.image} />
    </div>
  );
};

export default ProjectPage;


