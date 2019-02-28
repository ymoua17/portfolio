import React from 'react';

const Navigation = () => {
    return (
        <header className="center tc pv4 avenir">
            <h1 className="mt2 mb0 fw3 f1">Yeng Moua</h1>
            <h2 className="mt2 mb0 f3 fw3 ttu tracked">Software Developer</h2>
            <nav className="bt bb mt4">
                <a className="white-80 f3 no-underline-l dib pa3 grow underline-hover" href="#about">About</a>
                <a className="white-80 f3 no-underline-l dib pa3 grow underline-hover" href="#contact">Contact</a>
                <a className="white-80 f3 no-underline-l dib pa3 grow underline-hover" href="#portfolio">Portfolio</a>
            </nav>
        </header>
    )
}

export default Navigation;
