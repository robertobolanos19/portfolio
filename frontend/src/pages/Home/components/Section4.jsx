import React from 'react';
import './Section4.css';

function Section4({ showAll, toggleShowAll }) {
    return (
        <section className="section section4">
            <button onClick={toggleShowAll}>
                {showAll ? 'Close' : 'Show All'}
            </button>
        </section>
    );
}

export default Section4;
