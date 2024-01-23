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
                    <p>This is a component Library, where you can find all UI for your
                        website like Button, Cards ,Profiles, etc. Just add CDN links of
                        CSS and and Get Your UI in your website within second.</p>
                    <button className='postBtn'><a href="https://emegashop.netlify.app/">Live</a></button>
                </div>
                <div className="projectCard projectCard2">
                    <h1>Connectingfy</h1>
                    <p>Homepage, Login/Logout, Search Products, View
                        Products, Add to Cart, Add to Wishlist, Payment, Single
                        Product Page, Responisve.
                        <span>Tech Stack:</span> HTML, CSS, React.JS, Netlify, DummyJson(API)</p>
                    <button className='postBtn'><a href="https://connetingfy.netlify.app/">Live</a></button>
                </div>
                <div className="projectCard projectCard3">
                    <h1>VideoLibrary</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente voluptatibus quisquam quae totam officiis repellat repellendus aspernatur eius facilis?</p>
                    <button className='postBtn'><a href="https://videolibraryanand.netlify.app/">Live</a></button>
                </div>
                <div className="projectCard projectCard4">
                    <h1>Video Recorder</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente voluptatibus quisquam quae totam officiis repellat repellendus aspernatur eius facilis?</p>
                    <button className='postBtn'><a href="https://recorder05.netlify.app/">Live</a></button>
                </div>
                <div className="projectCard projectCard5"><h1>Heading2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente voluptatibus quisquam quae totam officiis repellat repellendus aspernatur eius facilis?</p>
                    <button className='postBtn'>Live</button></div>
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