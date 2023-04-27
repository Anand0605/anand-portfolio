import React from 'react'
import './Blogs.css';
// import img1 from '../image/image1.png';
// import img2 from '../image/Hoisting.jpeg';
// import img3 from '../image/flexing.jpeg';


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
                        In JavaScript, "let" and "const" are block-scoped variables, while "var" is function-scoped. "let" and "const" are recommended for better code clarity and fewer errors.

                    </p>
                    {/* <img src={img1} alt="" /> */}
                    <button className='btn1'>Read More</button>
                </div>
                <div className="parent1-child parent1-child-2">
                    <h2>flexing</h2>
                    <p>
                        "Flexbox" in JavaScript helps create dynamic and responsive web designs. Learn the basics of how it works and how to use it for different layout styles.
                    </p>
                    <button className='btn1'>Read More</button>
                </div>
                <div className="parent1-child parent1-child-3">
                    <h2>Hoisting</h2>
                    <p>
                        JavaScript "hoists" variable and function declarations to the top of their scopes. Learn how hoisting works, common mistakes, and best practices to write effective code.
                    </p>
                    <button className='btn1'>Read More</button>
                </div>
                <div className="blog-footer">
                    <div className="blog-child-footer">© |2023| All Right Reserved</div>
                </div>
            </div>
            {/* <div className="blog-footer">
                <div className="blog-child-footer">© |2023| All Right Reserved</div>
            </div> */}
        </>
    )
}

export default Blogs