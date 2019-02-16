import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from '../Components/Navigation/Navigation';
import About from '../Components/About/About';
import Portfolio from '../Components/Portfolio/Portfolio';

import './App.css';

const particlesOptions = {
  "particles": {
    "number": {
        "value": 100,
        "density": {
            "enable": true,
            "value_area": 1500
          }
        },
      "line_linked": {
        "enable": false,
        "opacity": .2
        },
      "move": {
        "direction": "bottom",
        "speed": .5
        },
      "size": {
        "value": 1.5
      },
      "opacity": {
        "anim": {
            "enable": true,
            "speed": .5,
            "opacity_min": 0.05
          }
        }
      },
      "interactivity": {
      "events": {
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      },
      "modes": {
        "push": {
          "particles_nb": 100
        }
      }
    },
  "retina_detect": true
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
          <h1 className="fw3 underline ma0">Portfolio</h1>
          <div className="pb6">
            <Portfolio name="Color Gradiant Generator" tech="React, JS, CSS3, HTML 5"/>
            <Portfolio name="Facial Recognition App" tech="React, Redux, JS, HTML5, & CSS3"/>
            <Portfolio name="RoboFriends" tech="React, Redux, JS, HTML5, & CSS3"/>
            <Portfolio name="Inspirational Quote Generator" tech="jQuery, JS, HTML5, & CSS3"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
