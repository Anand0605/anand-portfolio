import React from 'react'
import './Project.css'

const Projects = () => {
    return (
        <>
            <div className="big-main">
                <div className="project">
                    <h1>Latest Project</h1>
                </div>
            </div>
            <div className="main">
                <div className="projectCard projectCard1">
                    <h1>Emegashop</h1>
                    <p>Features:Homepage, Login/Logout, Search, View
                        Products, Add to Cart, Wishlist, Payment, Single Product
                        Page,Checkout,cart management,order summary, Responsive.<span>Tech Stack:</span> HTML, CSS, Javascript, React.JS, Netlify, Mockbee(Backend).</p>
                    <button className='postBtn'><a href="https://emegashop.netlify.app/">Live</a></button>
                </div>
                <div className="projectCard projectCard2">
                    <h1>Connectingfy</h1>
                    <p>Homepage, Login/Logout, Search Products, View
                        Products, Add to Cart, Add to Wishlist, Payment, Single
                        Product Page, Responsive.
                        <br /> <span>Tech Stack:</span> HTML, CSS, React.JS, Netlify, Mockbee(API)</p>
                    <button className='postBtn'><a href="https://connetingfy.netlify.app/">Live</a></button>
                </div>
                <div className="projectCard projectCard3">
                    <h1>VideoLibrary</h1>
                    <p>Feature: HomePage, VideoGallery, Search, Login/logout,View
                        SinglePage, Like/DisLike, WatchLater, History
                        <span>Tech Stack:</span> Html, Css, Javascript, ReactJs Netlify, Mockbee Api, React Icon, Material UI</p>
                    <button className='postBtn'><a href="https://videolibraryanand.netlify.app/">Live</a></button>
                </div>
                <div className="projectCard projectCard4">
                    <h1>Video Recorder</h1>
                    <p>Feature: Audio,Video,Screen+Video, ScreenRecord
                        <br /> <span>Tech Stack:</span> Html, Css, Javascript, React.js, Netlify, React
                        Icon, Material Ui Git, Github. </p>
                    <button className='postBtn'><a href="https://recorder05.netlify.app/">Live</a></button>
                </div>
                <div className="projectCard projectCard5">
                    <h1>ChatSphere</h1>
                    <p>
                        <strong>Features:</strong> Signin, Signout, Registration, Messaging, One-to-One Chat <br />
                        <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React.js, Express.js, Node.js, MongoDB, Bcrypt.js, JWT
                    </p>
                    <button className='postBtn'>Live</button>
                </div>
                <div className="projectCard projectCard6"><h1>Heading2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente voluptatibus quisquam quae totam officiis repellat repellendus aspernatur eius facilis?</p>
                    <button className='postBtn'>Live</button></div>
            </div>
            <div className="project-footer">
                <div className="project-child-footer">© |2023| All Right Reserved</div>
            </div>
        </>
    )
}

export default Projects;