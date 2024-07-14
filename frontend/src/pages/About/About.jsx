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
                <p>Hi, I am Roberto, a Computer Science Student who has experience working in fullstack Development and 3D design, additionally I am Interested in developing immersive experiences utilizing web, Virtual and Augmented Reality technologies. My goal is to continue finding ways to combine 3D and programming to create more engaging user experiences.</p>
            </div>
            <div className="responsive-section">
                <div className="responsive-div">
                    <h1>Freelance Work</h1>
                    <ul>
                        <li>3D modeling</li>
                        <li>UX/UI Design</li>
                        <li>Frontend Development</li>
                        <li>BackendD Development</li>
                    </ul>
                </div>
                <div className="responsive-div">
                    <h1>3D Softwares/Libraries</h1>
                    <ul>
                        <li>Maya</li>
                        <li>Blender</li>
                        <li>Unity</li>
                        <li>Three.js</li>
                        <li>Babylon.js</li>
                    </ul>
                </div>
                <div className="responsive-div">
                    <h1>Programming</h1>
                    <ul>
                        <li>React</li>
                        <li>C++, C#</li>
                        <li>MongoDb</li>
                        <li>Node.js</li>
                        <li>Javascript</li>
                        <li>HTML/CSS</li>

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
