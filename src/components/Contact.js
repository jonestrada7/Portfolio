import React from 'react'
import "./Contact.css"
import "aos/dist/aos.css"

class Contact extends React.Component {
    render() {
        return <div id='contact' className='contact'>
            <div>
                <h1 data-aos="flip-up" data-aos-duration="900">CONTACT</h1>
                <hr className='contact-hr' 
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

export default Contact;