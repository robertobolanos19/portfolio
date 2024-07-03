import React, { useState } from 'react';
import Model from '../../components/Model/Model';
import Navbar from '../../components/Navbar/Navbar'

import Section2 from '../Home/components/Section2';
import Section3 from '../Home/components/Section3';
import Section4 from '../Home/components/Section4';

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

    const homeInfo = {
        "title": "Inexplicable",
        "subTitle": "Creations",
        "description": "Unlock the inexplicable fusion of art and technology with cutting-edge 3D modeling and programming. Explore a world where imagination meets innovation, creating solutions that defy explanation."
    }
    return (
        <div>
            <Navbar/>
            <Model modelPath={'/dummyModels/test2.glb'} info={homeInfo}/>
            <Section2 setActiveFilter={handleSetActiveFilter} />
            <Section3 data={projects} activeFilter={activeFilter} showAll={showAll} />
            <Section4 showAll={showAll} toggleShowAll={toggleShowAll} />
        </div>
    );
};

export default Home;
