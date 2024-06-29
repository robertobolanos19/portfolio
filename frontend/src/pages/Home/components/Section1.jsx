import React from 'react';
import './Section1.css';

function Section1() {
    return (
        <section className="section section1">
            <div className="left-content">
                <h1>Main Title</h1>
                <h2>Subtitle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="right-content">Right Content</div>
        </section>
    );
}

export default Section1;
