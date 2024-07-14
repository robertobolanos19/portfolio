import React, { useState } from 'react';
import Model from '../../components/Model/Model';
import Navbar from '../../components/Navbar/Navbar';
import Section2 from '../Home/components/Section2';
import Section3 from '../Home/components/Section3';
import Section4 from '../Home/components/Section4';
import './Home.css';

const Home = ({ projects }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(prevShowAll => !prevShowAll);
    };

    const handleSetActiveFilter = (filter) => {
        setActiveFilter(filter);
        setShowAll(false); // Reset showAll when filter changes
    };

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.class === activeFilter);

    const homeInfo = {
        title: "Inexplicable",
        subTitle: "Journey",
        description: "Unlock the inexplicable fusion of art and technology with cutting-edge 3D modeling and programming."
    };

    return (
        <div>
            <Navbar />
            <Model modelPath={'/models/gundam.glb'} info={homeInfo} />
            <Section2 setActiveFilter={handleSetActiveFilter} />
            <Section3 data={filteredProjects} showAll={showAll} />
            <Section4 showAll={showAll} toggleShowAll={toggleShowAll} />
        </div>
    );
};

export default Home;
