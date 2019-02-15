import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="bt bb b--white-80 white-80 center">
                <a className="white-80 f4 hover-bg-dark-gray dib pt3" href="https://github.com/ymoua17" target="blank">{this.props.name}</a>
                <div className="flex flex-wrap">
                    <div className="dib v-mid pa3 center-m">
                        <img src="http://www.illuminationworksllc.com/wp-content/uploads/2017/04/ProjectManagement-1.jpg" alt={this.props.name} className="project ba b-white--80 br4" />
                    </div>
                    <div className="dib v-mid pa3 center">
                        <p className="mt0">{this.props.tech}</p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Portfolio;
