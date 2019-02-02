import React from 'react';
import portrait from './portrait.jpg';
import './About.css'


const About = () => {
    return (
        <div id="about" className="ph5-ns h-auto pb4">
            <h1 className="fw3 underline">About Me</h1>
            <div className='dib'>
                <div className="dib v-mid">
                    <img src={portrait} alt="portrait" className="portrait br4"/>
                </div>
                <div className="white-80 dib w-60 f3 v-mid pa2">
                    <p>Welcome to my portfolio! I am a Full-Stack Developer seeking a full-time employment.
                    I have been teaching myself the fundementals of web development, both front and back-end. 
                    I have built several projects that showcases my skills and growth as a developer.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
