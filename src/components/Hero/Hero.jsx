import React, { useContext, useState, useEffect, useRef } from 'react';
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

  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <section id="hero" ref={headerRef} className={`${sticky.isSticky ? 'sticky' : 'unsticky'}`}>
      <div
        id="header"
        ref={headerRef}
        className={`${sticky.isSticky ? 'sticky' : ''}`}
        //   style={{ marginTop: sticky.offset }}
      >
        <div className="logo">AH</div>
        <div className="flex">
          <div className="option">
            <div>portfolio</div>
          </div>
          <div className="option">
            <div>Recent work</div>
          </div>
          <div className="option">
            <div>About</div>
          </div>

          <div className="option">
            <div>Contact</div>
          </div>
        </div>
      </div>

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
