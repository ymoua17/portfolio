import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="white-80 center pb3 w-90">
                <a className="white-80 f3 dib pv3 no-underline grow underline-hover" href={this.props.github} target="blank">- {this.props.name}</a>
                <div className="center mw8">
                    <div className="cf">
                        <div className="v-mid pa2 fl w-100 w-50-ns">
                            {/* eslint-disable-next-line  */}
                            <a href={this.props.url} target="_blank"><img src={this.props.gif} alt={this.props.name} className="project br4 grow pointer" /></a>
                        </div>
                        <div className="white-80 v-mid pa2 fl w-100 w-50-ns f4">
                            <ul className="tl">
                                <li className="pb2">{this.props.list1}</li>
                                <li className="pb2">{this.props.list2}</li>
                                <li className="pb2 i">{this.props.list3}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Portfolio;
