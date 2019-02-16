import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="bb b--grey white-80 center pb3 w-90">
                <a className="white-80 f3 hover-bg-dark-gray dib pv3 no-underline" href="https://github.com/ymoua17" target="blank">- {this.props.name}</a>
                <div className="center mw8">
                    <div className="cf">
                        <div className="v-mid pa2 fl w-100 w-50-ns">
                            <img src="http://www.illuminationworksllc.com/wp-content/uploads/2017/04/ProjectManagement-1.jpg" alt={this.props.name} className="project ba b-white--80 br4 grow pointer" />
                        </div>
                        <div className="white-80 v-mid pa2 fl w-100 w-50-ns">
                            <ul className="tl f4 mt0">
                                <li>hello</li>
                                <li>Fake</li>
                                <li>list</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Portfolio;
