import React, { useState } from 'react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import { AiFillCheckSquare } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const [state, handleSubmit] = useForm("mpzelvdg");

    const navigate = useNavigate();

    return (
        <>{
            !state.succeeded ?
                <div className='mainContact'>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h2>Contact Us</h2>
                        <label htmlFor="name">
                            Name<sup className='mendatory'>*</sup>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder='Enter the Name'
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        <label htmlFor="email">
                            Email<sup className='mendatory'>*</sup>
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder='Enter The Email'
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor="message">
                            Message<sup className='mendatory'>*</sup>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Enter The Message'
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div> :
                <div className='formSuccess'>
                    <p><AiFillCheckSquare className='submitIcon' />Form Submitted Successfully, Admin will contact you soon.</p>
                    <button onClick={() => navigate('/')}>Go Back</button>
                </div>

        }
            <div className="main-footer">
                <div className="child-footer">© |2023| All Right Reserved</div>
            </div>
        </>
    );
}

export default ContactForm;
