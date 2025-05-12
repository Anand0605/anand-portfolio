import React from 'react'
import './Main.css';
// import main from '../image/github.png';
// import main1 from '../image/instagram.png';
// import main2 from '../image/linkedin.png';
// import main3 from '../image/twitter.png';
import profile from '../image/Profile-picture.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import { Navlink } from "react-router-dom";



function Main() {
  return (
    <>
      <div className="main-body">
        <div className="main-Div">
          <div className="left-div">
            <div>
              <h2>Hello, I am </h2>
              <h1>Anand Gautam</h1>
              <h2 className='animated-text'> I am <span>
                <Typewriter
                  options={{
                    strings: ['Frontend Devloper', 'Coder'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 60,
                    delay: 100,
                    pauseFor: 2000
                  }}
                /></span></h2>
            </div>
            <p>My name is Anand Kumar Gautam, a frontend developer specializing in React.js. I create dynamic and responsive user interfaces to enhance user experience and engagement.</p>
            <div className='social-links'>
              <a href="https://github.com/Anand0605" target='_blank' className="github-icon"><AiFillGithub className='icons' /></a>
              <a href="" className="insta-icon"><AiFillInstagram className='icons' /></a>
              <a href="https://www.linkedin.com/in/anand-kumar-gautam-733586207/" className="linkedin-icon"><AiFillLinkedin className='icons' /></a>
              <a href="" className="twitter-icon"><AiFillTwitterCircle className='icons' /></a>
            </div>
          </div>
          <div className="right-div">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="main-page">
        <div className="main-child">© |2023| All Right Reserved</div>
      </div> */}
    </>
  )
}

export default Main