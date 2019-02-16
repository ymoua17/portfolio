import React from 'react';
import portrait from './portrait.jpg';
import github from './Icons/github.png';
import linkedin from './Icons/linkedin.png';
import gmail from './Icons/gmail.png';
import resume from './Resume/resume.pdf'
import './About.css'


const About = () => {
    return (
        <div id="about">
            <h1 className="fw3 underline">About Me</h1>
            <div className='center mw8'>
                <div className="cf">
                    <div className="v-mid pa2 fl w-100 w-50-ns">
                        <img src={portrait} alt="portrait" className="portrait br4"/>
                    </div>
                    <div className="white-80 v-mid pa3 fl w-100 w-50-ns">
                        <p className="mt0 f4">Welcome to my portfolio! I am a Software Developer seeking a full-time employment.
                    I have been teaching myself the fundementals of web development, both front and back-end. 
                    I have built several projects that showcases my skills and growth as a developer.</p>
                        <div id="contact" className="pb4">
                            <h1 className="f3 fw3 underline">Contact Me</h1>
                            <div className="dt mw6 center">
                                <div className="dtc v-bottom">
                                    <a href="mailto:yengkhongmoua@gmail.com" target="blank"><img className="icon1 hover-bg-dark-gray" src={gmail} alt="Gmail"/></a>
                                    <a href="https://github.com/ymoua17" target="blank"><img className="icon hover-bg-dark-gray" src={github} alt="Github"/></a>
                                    <a href="https://www.linkedin.com/in/yeng-moua-4a4805131/" target="blank"><img className="icon hover-bg-dark-gray" src={linkedin} alt="LinkedIn"/></a>
                                </div>
                            </div>
                            <div className="pt3">
                                <a href={resume} target="blank" className="white-80 f4 no-underline hover-bg-dark-gray">Click Here to Download My Resume!</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default About;
