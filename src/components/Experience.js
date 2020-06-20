import React from "react"
import "./Experience.css"
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
                <div className='experience-text' data-aos='fade-right' data-aos-duration='900'>
                    <p className='list-header'>Languages:</p>
                    <br/>
                    <ul className='skill'>
                        <li className='exp-li'>Python</li>
                        <li className='exp-li'>C / C++</li>
                        <li className='exp-li'>Javascript</li>
                        <li className='exp-li'>HTML</li>
                        <li className='exp-li'>CSS</li>
                        <li className='exp-li'>SQL</li>
                    </ul>
                </div>
                <div className='experience-text' data-aos='fade-left' data-aos-duration='900'>
                    <p className='list-header'>Technologies:</p>
                    <br/>
                    <ul className='skill'>
                        <li className='exp-li'>NodeJS</li>
                        <li className='exp-li'>ReactJS</li>
                        <li className='exp-li'>Express</li>
                        <li className='exp-li'>MongoDB</li>
                        <li className='exp-li'>Tensorflow</li>
                        <li className='exp-li'>Keras</li>
                    </ul>
                </div>
            </div>
            
        </div>
    }
}

export default Experience;