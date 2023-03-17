import React from 'react'
import './Blogs.css';
import img1 from '../image/image1.png';
import img2 from '../image/Hoisting.jpeg';
import img3 from '../image/flexing.jpeg';


function Blogs() {
    return (
        <>
            <div className="parent">
                <div className="blog">
                    <h1>Our Blogs</h1>
                </div>
            </div>
            <div className="parent1">
                <div className="parent1-child parent1-child-1">
                    <h2>let var const</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi repellat possimus adipisci optio facilis soluta excepturi quia aut, animi laborum veniam? Qui, culpa voluptatem.
                    </p>
                    {/* <img src={img1} alt="" /> */}
                    <button className='btn1'>Read More</button>
                </div>
                <div className="parent1-child parent1-child-2">
                    <h2>flexing</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi repellat possimus adipisci optio facilis soluta excepturi quia aut, animi laborum veniam? Qui, culpa voluptatem.
                    </p>
                    <button className='btn1'>Read More</button>
                </div>
                <div className="parent1-child parent1-child-3">
                    <h2>Hoisting</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi repellat possimus adipisci optio facilis soluta excepturi quia aut, animi laborum veniam? Qui, culpa voluptatem.
                    </p>
                    <button className='btn1'>Read More</button>
                </div>
            </div>
        </>
    )
}

export default Blogs