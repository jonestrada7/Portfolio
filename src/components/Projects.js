import React from 'react'
import "./Projects.css"
import githubImg from "../images/github.svg"
import LinkbotImg1 from "../images/LinkbotImg1.jpg"
import LinkbotImg2 from "../images/LinkbotImg2.jpg"
import NodeSportsImg from "../images/node_sports.jpg"
import BillSplitLogo from "../images/BillSplitLogo.png"
import BillSplitExample from "../images/BillSplitExample.jpg"
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
                <a target='_blank' href='https://github.com/jonestrada7/Linkbot-Custom-Modules'
                    rel='noopener noreferrer' data-aos='fade-right' data-aos-duration='750' className='proj-content'>
                        
                    <div className='project-base'>
                        <div className='image-box'>
                            <h2>Linkbot Custom Modules</h2>
                            <p className='proj-description'>Created a software library in <b>Ch (derivation of C++ and C)</b> for a high school robotics class/club. Includes a library of modules that allow Linkbots (modular robots) to drive in customizable, accurate and precise ellipses. Other multi-functional robot APIs are also included as part of the experimenting process in order to allow multiple robots connected together to function as one.</p>
                            <img src={LinkbotImg2} alt="" className='proj-img linkbot'></img>
                        </div>
                    </div>
                    
                    <div className='overlay'>
                        <div className='github-overlay'>
                            <p className='github-desc'>Click to see the code!</p> 
                            <img src={githubImg} alt='Octocat' className='gitimg'></img>
                        </div>
                    </div>
                    
                </a>
                
                <a target='_blank' href='https://github.com/jonestrada7/node-sports'
                    rel='noopener noreferrer' data-aos='fade-up' data-aos-duration='750' className='proj-content'>
                        
                    <div className='project-base'>
                        <div className='image-box'>
                            <h2>Node Sports</h2>
                            <p className='proj-description'>A clean and simple website template built using <b>NodeJS (HTML, CSS, Javascript)</b>. Reinforcing mainly front-end knowledge as well as simple back-end procedures that include handling and manipulating http requests via URLs and simple data manipulation.</p>
                            <img src={NodeSportsImg} alt="" className='proj-img nodesports'></img>
                        </div>
                    </div>
                    
                    <div className='overlay'>
                        <div className='github-overlay'>
                            <p className='github-desc'>Click to see the code!</p> 
                            <img src={githubImg} alt='Octocat' className='gitimg'></img>
                        </div>
                    </div>
                    
                </a>
                
                <a target='_blank' href='https://github.com/chenaaron3/BillSplit'
                    rel='noopener noreferrer' data-aos='fade-left' data-aos-duration='750' className='proj-content'>
                        
                    <div className='project-base'>
                        <div className='image-box'>
                            <h2>BillSplit</h2>
                            <p className='proj-description'>Collaborated and helped design a mobile Android app for HackSC that splits a large party’s bill by scanning a receipt. Used <b>Taggun Optical Character Recognition</b> to recognize and read prices from receipt, <b>Twilio</b> to send automated text messages to send bill information, and <b>Paypal’s API</b> to allow bill recipients to pay securely.</p>
                            <img src={BillSplitLogo} alt="" className='proj-img billsplitlogo'></img>
                            <img src={BillSplitExample} alt="" className='proj-img billsplitexample'></img>
                        </div> 
                    </div>
                    
                    <div className='overlay'>
                        <div className='github-overlay'>
                            <p className='github-desc'>Click to see the code!</p> 
                            <img src={githubImg} alt='Octocat' className='gitimg'></img>
                        </div>
                    </div>
                    
                </a>
            </div>
        </div>
    }
}

export default Projects;