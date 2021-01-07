import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import { Link } from 'react-scroll';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <h1 className="title">About me</h1>
        <p>
          I'm web designer & front-end developer with 7 years of professional experience. I'm
          interested in all kinds of visual communication, but my major focus is on designing web,
          mobile & tablet interfaces. I also have skills in other fields like branding, icon design
          or web development.
        </p>

        <p>
          Earlier I was full-time freelancer for 6 years behind my studio Precise Design. Currently
          I'm working for little overgrown czech “start-up” called Heureka.cz Restu.cz as a Senior
          UI/UX designer Product designer.
        </p>
      </Container>
    </section>
  );
};

export default About;
