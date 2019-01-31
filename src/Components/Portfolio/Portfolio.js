import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="dib ba b--white-80 br4 ma2 white-80">
                <div className="size">
                    <a className="white-80 f4 hover-bg-dark-gray dib pa3" href="https://github.com/ymoua17" target="blank">{this.props.name}</a>
                    <img src="http://www.illuminationworksllc.com/wp-content/uploads/2017/04/ProjectManagement-1.jpg" alt={this.props.name} className="project ba b-white--80 br4" />
                    <p>{this.props.tech}</p>
                </div> 
            </div>
        )
    }
    
}

export default Portfolio;
