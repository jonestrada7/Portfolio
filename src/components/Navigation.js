import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            scrollPos: window.pageYOffset,
        }
    };
    
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    handleScroll = (event) => {
        this.setState({
            scrollPos: window.pageYOffset,
        });
    };
    
    render() {  
        
        var fixedPos = this.state.scrollPos > 0;
        
        return <div className={fixedPos ? 'nav-bar' : ''}>
            <ul className='nav-ul'>
                <li className='nav-li'><a className="link" href="#about">About</a></li> 
                <li className='nav-li'><a className="link" href="#experience">Experience</a></li> 
                <li className='nav-li'><a className="link" href="#projects">Projects</a></li> 
                <li className='nav-li'><a className="link" href="#contact">Contact</a></li> 
            </ul>
        </div>
    }
}

export default Navigation;