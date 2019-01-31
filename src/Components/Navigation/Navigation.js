import React from 'react';

const Navigation = () => {
    return (
        <header className="center tc pv4 avenir">
            <h1 className="mt2 mb0 fw3 f1">Yeng Moua</h1>
            <h2 className="mt2 mb0 f3 fw3 ttu tracked">Full-Stack Developer</h2>
            <nav className="bt bb mt4">
                <a className="white-80 f3 no-underline-l hover-bg-dark-gray dib pa3" href="#about">About</a>
                <a className="white-80 f3 no-underline-l hover-bg-dark-gray dib pa3" href="#portfolio">Portfolio</a>
                <a className="white-80 f3 no-underline-l hover-bg-dark-gray dib pa3" href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Navigation;
