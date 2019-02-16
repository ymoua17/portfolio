import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from '../Components/Navigation/Navigation';
import About from '../Components/About/About';
import Portfolio from '../Components/Portfolio/Portfolio';

import './App.css';

const particlesOptions = {
  "particles": {
    "number": {
      "value": 45,
      "density": {
        "enable": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "speed": 5,
        "size_min": 0.3,
      }
    },
    "line_linked": {
      "enable": true,
    },
    "move": {
      "random": true,
      "speed": 0.3,
      "direction": "bottom",
      "out_mode": "out"
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}/>
        <Navigation />
        <About />
        <div id="portfolio">
          <h1 className="fw3 underline">Portfolio</h1>
          <div className="pb4">
            <Portfolio name="Facial Recognition App" tech="React, Redux, JS, HTML5, & CSS3"/>
            <Portfolio name="RoboFriends" tech="React, Redux, JS, HTML5, & CSS3"/>
            <Portfolio name="Inspirational Quote Generator" tech="jQuery, JS, HTML5, & CSS3"/>
            <Portfolio name="Color Gradiant Generator" tech="JS, HTML5, & CSS3"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
