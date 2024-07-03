import React from 'react';
import '../components/Section1.css';

const Section1 = ({ images }) => {
    return (
        <div className="section1">
            <div className="images">
                {images.map((image, index) => (
                    <div className="image-wrapper" key={index}>
                        <img src={image} alt={`Project Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section1;
