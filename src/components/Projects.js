import React from 'react'
import "./Projects.css"
import "aos/dist/aos.css"

class Projects extends React.Component {
    render() {
        return <div id='projects' className='projects'>
            <div>
                <h1 data-aos="flip-up" data-aos-duration="900">PROJECTS</h1>
                <hr className='projects-hr' 
                    data-aos="flip-left" 
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" 
                    align="left"/>
            </div>
            
            <div className='content'>
                <div className='text' data-aos='fade-down' data-aos-duration='900'>
                    <p>Nothing here yet ¯\_(ツ)_/¯</p>
                </div>
            </div>
        </div>
    }
}

export default Projects;