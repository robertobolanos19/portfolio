import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Navbar />
            <div className="image-container">
                <img src="/imgs/selfPort.JPEG" alt="Placeholder" className="profile-image" />
            </div>
            <div className="description">
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Quam massa magna tortor pulvinar lectus rutrum leo. Dolor mauris purus fringilla id cursus malesuada nunc.</p>
            </div>
            <div className="responsive-section">
                <div className="responsive-div">
                    <h1>Creative</h1>
                    <ul>
                        <li>Art Direction</li>
                        <li>UX/UI Design</li>
                        <li>Visuals</li>
                    </ul>
                </div>
                <div className="responsive-div">
                    <h1>Tech</h1>
                    <ul>
                        <li>Art Direction</li>
                        <li>UX/UI Design</li>
                        <li>Visuals</li>
                    </ul>
                </div>
                <div className="responsive-div">
                    <h1>Production</h1>
                    <ul>
                        <li>Art Direction</li>
                        <li>UX/UI Design</li>
                        <li>Visuals</li>
                    </ul>
                </div>
            </div>
            <div className="contact">
                <h1>Let's work together!</h1>
                <p>roberto_bolanos@icloud.com</p>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/roberto-bolanos-021a6a242/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/inexplicable_creations/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default About;
