import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from '../Components/Navigation/Navigation';
import About from '../Components/About/About';
import Portfolio from '../Components/Portfolio/Portfolio';
import ColorGeneratorGradient from '../Components/Portfolio/PortfolioGifs/ColorGradientGenerator.gif';
import BreakingBadQuoteGenerator from '../Components/Portfolio/PortfolioGifs/BreakingBadQuoteGenerator.gif';

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
            <Portfolio name="Color Gradiant Generator" 
              url="https://ymoua17.github.io/colorgenerator/"
              github="https://github.com/ymoua17/colorgenerator"
              gif={ColorGeneratorGradient} 
              list1="Responsive web application that generates a color gradient for users."
              list2="Color gradient can be randomized or customizable to the user's liking."
              list3="React, JS, CSS3, HTML5"
              />
            <Portfolio name="Breaking Bad Quote Generator" 
              url="https://ymoua17.github.io/quotegenerator/"
              github="https://github.com/ymoua17/quotegenerator"
              gif={BreakingBadQuoteGenerator} 
              list1="Responsive web application that uses a simple API to get a quote from the hit TV series Breaking Bad."
              list2="Generated quote can be tweeted to user's Twitter."
              list3="React, JS, CSS3, HTML5"
              />
              <p className="white-80 f3">Come back soon for more projects!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
