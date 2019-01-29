import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from '../Components/Navigation/Navigation';
import Scroll from '../Components/Scroll/Scroll';
import About from '../Components/About/About';
import Portfolio from '../Components/Portfolio/Portfolio';
import Contact from '../Components/Contact/Contact';

import './App.css';

const particlesOptions = {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "speed": 3,
        "size_min": 0.3,
      }
    },
    "line_linked": {
      "enable": true,
    },
    "move": {
      "random": true,
      "speed": 0.5,
      "direction": "bottom",
      "out_mode": "out"
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App mh4">
        <Particles className="particles"
          params={particlesOptions}/>
        <Navigation />
        <Scroll>
            <About />
            <Portfolio />
            <Contact />
        </Scroll>
      </div>
    );
  }
}

export default App;
