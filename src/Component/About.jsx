import React from 'react'
import './About.css';
import profile from '../image/profile-pic14.png';

function About() {
    return (
        <>
            <div className="mainAbout">
                <div className="left-child"><img src={profile} alt="" /></div>
                <div className="right-child">
                    <h1>About <span>Me</span></h1>
                    <h2>Frontend Devloper</h2>
                    <p>My name is Anand Kumar Gautam, a frontend developer specializing in React.js and a proficient MERN stack developer. I build dynamic, responsive, and scalable web applications using modern technologies like React.js, Node.js, Express.js, and MongoDB. With a strong focus on performance and user experience, I craft full-stack solutions that are robust, secure, and production-ready.</p>
                    <div className="parent-btn"><button className='btn'>Read More</button></div>
                </div>
            </div>
            <div className="about-footer">
                <div className="about-child-footer">© |2023| All Right Reserved</div>
            </div>
        </>
    )
}

export default About;