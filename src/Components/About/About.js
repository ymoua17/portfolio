import React from 'react';
import portrait from './portrait.jpg';
import github from './Icons/github.png';
import linkedin from './Icons/linkedin.png';
import gmail from './Icons/gmail.png';
import './About.css'


const About = () => {
    return (
        <div id="about">
            <h1 className="fw3 underline ma2">About Me</h1>
            <div className='center mw8'>
                <div className="cf">
                    <div className="v-mid pa3 fl w-100 w-50-ns">
                        <img src={portrait} alt="portrait" className="portrait br4"/>
                    </div>
                    <div className="white-80 v-mid pa3 fl w-100 w-50-ns">
                        <p className="mt0 f4">Welcome to my portfolio!  I am an aspiring Software Developer, currently looking to new oppurtinities. 
                    I have built several projects below that showcases my knowledge and work.</p>
                        <div id="contact" className="pb4">
                            <h1 className="f3 fw3 underline">Contact Me</h1>
                            <div className="dt mw6 center">
                                <div className="dtc v-bottom">
                                    <a href="mailto:yengkhongmoua@gmail.com" target="_self"><img className="icon1 hover-bg-dark-gray grow" src={gmail} alt="Gmail"/></a>
                                    {/* eslint-disable-next-line */}
                                    <a href="https://github.com/ymoua17" target="_blank"><img className="icon hover-bg-dark-gray grow" src={github} alt="Github"/></a>
                                    {/* eslint-disable-next-line */}
                                    <a href="https://www.linkedin.com/in/yeng-moua-4a4805131/" target="_blank"><img className="icon hover-bg-dark-gray grow" src={linkedin} alt="LinkedIn"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About;
