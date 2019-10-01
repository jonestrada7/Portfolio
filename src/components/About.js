import React from "react"
import "./About.css"
import profilePic from "../images/profilePic.jpg"
import resume from "../files/Resume.pdf"
// import Button from "./button.js"
import "aos/dist/aos.css";

class About extends React.Component {
    render() {
        return <div id='about' className='about'>
            <div >
                <h1 data-aos="flip-up" data-aos-duration="900">ABOUT</h1>
                <hr className='about-hr' 
                    data-aos="flip-left" 
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" 
                    align="left"/>
            </div>
            
            <div className='content'>
                <div className='text' data-aos='fade-down' data-aos-duration='900'>
                    <p> Hello, testing testing.</p>
                </div>
            </div>
            
        </div>
    }
}

export default About;