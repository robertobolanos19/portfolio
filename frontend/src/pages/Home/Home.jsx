import React, { useState } from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import './Home.css';

function Home() {
    const [activeFilter, setActiveFilter] = useState('All');

    return (
        <div className="home">
            <Section1 />
            <Section2 setActiveFilter={setActiveFilter} />
            <Section3 activeFilter={activeFilter} />
        </div>
    );
}

export default Home;
