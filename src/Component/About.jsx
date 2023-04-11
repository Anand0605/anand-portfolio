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
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic vero possimus quo! Odit consectetur veritatis tenetur sit eius ab ipsam velit magnam at. Consequuntur dolor nihil laborum quasi in natus optio adipisci recusandae harum veritatis.sapiente perferendis beatae enim eaque, debitis molestiae magni dolor?</p>
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