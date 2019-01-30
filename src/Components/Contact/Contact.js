import React from 'react';
import github from './Icons/github.png';
import linkedin from './Icons/linkedin.png';
import gmail from './Icons/gmail.png';
import resume from './Resume/resume.pdf'
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="pb5">
            <h1 className="fw3 underline">Contact</h1>
            <div className="dt mw6 center">
                <div className="dtc v-mid">
                    <a href="mailto:yengkhongmoua@gmail.com" target="blank"><img className="icon1 hover-bg-dark-gray" src={gmail} alt="Gmail"/></a>
                    <a href="https://github.com/ymoua17" target="blank"><img className="icon hover-bg-dark-gray" src={github} alt="Github"/></a>
                    <a href="https://www.linkedin.com/in/yeng-moua-4a4805131/" target="blank"><img className="icon hover-bg-dark-gray" src={linkedin} alt="LinkedIn"/></a>
                </div>
            </div>
            <div className="pt3">
                <a href={resume} target="blank" className="white-80 f3 no-underline-l hover-bg-dark-gray">Click Here to Download My Resume!</a>
            </div>
        </div>
    )
}

export default Contact;
