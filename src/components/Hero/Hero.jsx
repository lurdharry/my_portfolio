import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import reactLogo from '../../images/reactjs-icon.svg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <h1 className="title">PAVEL HUZA</h1>
        <p className="subtitle">
          I'm a Czech Republic based web designer & front‑end developer focused on crafting clean &
          user‑friendly experiences.
        </p>

        <span className="hero-button">Check my work</span>
      </div>
    </section>
  );
};

export default Header;
