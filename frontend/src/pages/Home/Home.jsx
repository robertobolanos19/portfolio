import React, { useState } from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import './Home.css';

function Home() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(prevShowAll => !prevShowAll);
    };

    const handleSetActiveFilter = (filter) => {
        setActiveFilter(filter);
        setShowAll(false); // Reset showAll when filter changes
    };

    return (
        <div className="home">
            <Section1 />
            <Section2 setActiveFilter={handleSetActiveFilter} />
            <Section3 activeFilter={activeFilter} showAll={showAll} />
            <Section4 showAll={showAll} toggleShowAll={toggleShowAll} />
        </div>
    );
}

export default Home;
