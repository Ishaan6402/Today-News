import React, { Component } from 'react';
import aboutImage from '../Images/coffee-791439_1280.jpg';

const About = () => {
    return (
        <>
            <div className='d-flex justify-content-center my-3' style={{ textDecoration: "underline double" }}>
                <h1>ABOUT US </h1>
            </div>
            <div className='d-flex justify-content-center my-3'>
                <div className="card d-flex justify-content-center">
                    <img style={{ height: "20rem" }} src={aboutImage} className="card-img-top" alt="..." />
                    <div className="card-body d-flex justify-content-center my-3">
                        <p style={{ width: "40rem", textAlign: "center", textDecoration: "bold" }} className="card-text">Welcome to TODAY's NEWS, your trusted source for timely and reliable news coverage. Our dedicated team of journalists and reporters is committed to delivering the latest updates on a wide range of topics, from breaking news and politics to entertainment and lifestyle. With a passion for accurate and unbiased reporting, we strive to keep you informed and engaged in the rapidly evolving world around us. Whether you're seeking in-depth analysis or quick summaries of the day's events, [News Website Name] is here to provide you with the information you need. Thank you for choosing us as your go-to news source.</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default About