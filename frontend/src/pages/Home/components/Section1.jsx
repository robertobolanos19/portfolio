import React from 'react';
import './Section1.css';
import ThreeModel from '../../../components/Three/ThreeModel'; // Update the import path if necessary

const Section1 = () => {
    return (
        <div className="section1">
            <div className="left-content">
                <h1>Main Title</h1>
                <h2>Subtitle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="right-content">
                <ThreeModel modelPath={'/dummyModels/test2.glb'}/>
            </div>
        </div>
    );
};

export default Section1;
