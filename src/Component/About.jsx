import React from 'react'
import './About.css';
import profile from '../image/Anand2.png';

function About() {
    return (
        <>
            <div className="mainAbout">
                <div className="left-child"><img src={profile} alt="" /></div>
                <div className="right-child">
                    <h1>About <span>Me</span></h1>
                    <h2>Frontend Devloper</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum provident minima voluptatibus facere, vel asperiores. Nobis temporibus suscipit exercitationem illum sunt.</p>
                    <div className="parent-btn"><button className='btn'>Read More</button></div>
                </div>
            </div>
        </>
    )
}

export default About;