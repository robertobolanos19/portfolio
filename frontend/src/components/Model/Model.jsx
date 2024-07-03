import React from 'react';
import './Model.css';
import ThreeModel from '../Three/ThreeModel';

const Model = ({ modelPath, info }) => {
    return (
        <div className="modelSection">
            <div className="left-content">
                <h1>{info.title}</h1>
                <h2>{info.subTitle}</h2>
                <p>{info.description}</p>
            </div>
            <div className="right-content">
                <ThreeModel modelPath={modelPath} />
            </div>
        </div>
    );
};

export default Model;
