import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="bt bb b--white-80 white-80 center pb4">
                <a className="white-80 f4 hover-bg-dark-gray dib pv3" href="https://github.com/ymoua17" target="blank">{this.props.name}</a>
                <div className="center mw8">
                    <div className="cf">
                        <div className="v-mid pa2 fl w-100 w-50-ns">
                            <img src="http://www.illuminationworksllc.com/wp-content/uploads/2017/04/ProjectManagement-1.jpg" alt={this.props.name} className="project ba b-white--80 br4" />
                        </div>
                        <div className="white-80 v-mid pa2 fl w-100 w-50-ns">
                            <p className="mt0">{this.props.tech}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Portfolio;
