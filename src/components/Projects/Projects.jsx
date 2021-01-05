import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import ProjectImg from '../Image/ProjectImg';
import projectDetails from '../../mock/details';

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
      <Container>
        <div className="project-wrapper">
          <h2 className="section-title-alt">My Works</h2>

          {projectDetails.map((project, index) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={6} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={800}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div className="info">
                        <p className="info1">
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4 info2">{info2 || ''}</p>

                        <span className=" vertical">
                          <Link to={`/${title}/`} target="_blank" rel="noopener noreferrer">
                            <div className="buttonTwo">
                              <div className="circle" />
                              More Details
                            </div>
                          </Link>
                        </span>

                        {repo && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={repo}
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={800}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg
                            classNam="project-image-base"
                            alt={title}
                            filename={img}
                            height="400px"
                          />
                        </div>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
