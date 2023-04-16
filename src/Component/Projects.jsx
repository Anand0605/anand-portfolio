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
                    <h1>UI-Mate</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolor reprehenderit laborum fugiat aspernatur, totam quae ducimus ex voluptas. Molestiae?</p>
                    <button className='postBtn'><a href="http://127.0.0.1:5500/index1.html">Live</a></button>
                </div>
                <div className="projectCard projectCard2">
                    <h1>Heading2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente voluptatibus quisquam quae totam officiis repellat repellendus aspernatur eius facilis?</p>
                    <button className='postBtn'>Live</button>
                </div>
                <div className="projectCard projectCard3">
                    <h1>Heading2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente voluptatibus quisquam quae totam officiis repellat repellendus aspernatur eius facilis?</p>
                    <button className='postBtn'>Live</button>
                </div>
                <div className="projectCard projectCard4">
                    <h1>Heading2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sapiente voluptatibus quisquam quae totam officiis repellat repellendus aspernatur eius facilis?</p>
                    <button className='postBtn'>Live</button>
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