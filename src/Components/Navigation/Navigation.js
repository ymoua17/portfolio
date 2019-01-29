import React from 'react';
import "./Navigation.css"

const Navigation = () => {
    return (
        <header className="center tc pv6 avenir">
            <h1 className="mt2 mb0 fw1 f1">Yeng Moua</h1>
            <h2 className="mt2 mb0 f4 fw3 ttu tracked">Full-Stack Developer</h2>
            <nav className="bt bb tc mw-100 center mt4">
                <a className="white-80 f4 no-underline-l hover-bg-dark-gray dib pa3" href="#home">Home</a>
                <a className="white-80 f4 no-underline-l hover-bg-dark-gray dib pa3" href="#about">About</a>
                <a className="white-80 f4 no-underline-l hover-bg-dark-gray dib pa3" href="#portfolio">Portfolio</a>
                <a className="white-80 f4 no-underline-l hover-bg-dark-gray dib pa3" href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Navigation;
