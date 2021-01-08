import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      {projects.map((project) => {
        const { title, info, info2, url, repo, img, id } = project;

        return (
          <div className="flex-container">
            <div className="flex-container__text">
              <h2 className="title">{title}</h2>
              <div className="line" />
              <h3 className="info">{info}</h3>
              <h3 className="info">{info2}</h3>

              <div className="button-container">
                <div className="button button__1">More on behance</div>
                <div className="button button__2">online soon</div>
              </div>
            </div>

            <div className="flex-container__image">
              <ProjectImg classNam="project-image-base" alt={title} filename={img} height="400px" />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
