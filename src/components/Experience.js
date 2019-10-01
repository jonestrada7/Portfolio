import React from "react"
import "./Experience.css"
// import Button from "./button.js"
import "aos/dist/aos.css";

class Experience extends React.Component {
    render() {
        return <div id='experience' className='experience'>
            <div>
                <h1 data-aos="flip-up" data-aos-duration="900">EXPERIENCE</h1>
                <hr className='experience-hr' 
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

export default Experience;