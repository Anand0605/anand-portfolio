import React from 'react';
import './Main.css';
import profile from '../image/Profile-picture.png';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';

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
                    strings: ['Frontend Developer', 'Coder'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 60,
                    delay: 100,
                    pauseFor: 2000
                  }}
                />
              </span></h2>
            </div>
            <p>My name is Anand Kumar Gautam, a frontend developer specializing in React.js. I create dynamic and responsive user interfaces to enhance user experience and engagement.</p>
            <div className='social-links'>
              <a href="https://github.com/Anand0605" target='_blank' rel="noreferrer"><AiFillGithub className='icons' /></a>
              <a href="#"><AiFillInstagram className='icons' /></a>
              <a href="https://www.linkedin.com/in/anand-kumar-gautam-733586207/" target='_blank' rel="noreferrer"><AiFillLinkedin className='icons' /></a>
              <a href="#"><AiFillTwitterCircle className='icons' /></a>
            </div>
          </div>
          <div className="right-div">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>
      <footer className="main-page">
        <div className="main-child">© 2025 Anand Kumar Gautam. All rights reserved.</div>
      </footer>
    </>
  );
}

export default Main;
