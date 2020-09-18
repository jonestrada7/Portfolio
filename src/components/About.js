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
                <div className='text-box' data-aos='fade-down' data-aos-duration='900'>
                    <p>Hi! My name is Jonathan. I'm a third-year undergraduate student pursuing a B.S. in Computer Science at
                        UC Irvine with a specialty in <b>Intelligent Systems</b> and a minor in Management. I'm a generally analytic person, always paying attention to details and constantly striving to find ways to improve both my technological and innovative skills. I intend to use my abilities to expand my visions and improve the world, one bit or byte at a time.
                    </p>
                    <br/>
                    <p> I've listed a couple of my endeavors and projects below, feel free to take a look!
                    </p> 
                    <br/>
                    <div className='resume-box' data-aos='fade-right' data-aos-duration='750'>
                        <a href={resume} className="resume-link" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
                
                <div className='img-box'> 
                    <img className='img-profile' data-aos='fade-left' data-aos-duration='750' src={profilePic} alt=''></img>
                </div> 
                 
            </div>
                      
        </div>
    }
}

export default About;