import React, { useState } from 'react';
import './Section2.css';

function Section2({ setActiveFilter }) {
    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (filter) => {
        setActiveButton(filter);
        setActiveFilter(filter);
    };

    return (
        <section className="section section2">
            <button
                className={activeButton === 'All' ? 'active' : ''}
                onClick={() => handleButtonClick('All')}
            >
                #All
            </button>
            <button
                className={activeButton === 'Freelance' ? 'active' : ''}
                onClick={() => handleButtonClick('Freelance')}
            >
                #Freelance
            </button>
            <button
                className={activeButton === 'Product' ? 'active' : ''}
                onClick={() => handleButtonClick('Product')}
            >
                #Product
            </button>
            <button
                className={activeButton === 'Exploration' ? 'active' : ''}
                onClick={() => handleButtonClick('Exploration')}
            >
                #Exploration
            </button>
        </section>
    );
}

export default Section2;
