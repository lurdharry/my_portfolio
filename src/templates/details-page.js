import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { headData } from '../mock/data';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Image from '../components/Image/Image';
import { Layout } from '../components/Layout/Layout';
import Video from '../components/Video/Video';

export default function DetailsPage({ pageContext: { project } }) {
  const { title, info, info2, img, screenshots, video } = project;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'More Details' || headData.title}</title>
        <html lang={headData.lang || 'en'} />
        <meta name="description" content={headData.description || 'More details page'} />
      </Helmet>

      <Container>
        <div className="view-more">
          <h1 className="view-more__title title-color">{title}</h1>
          <Row>
            <Col className="col summary-container" md={8} sm={12}>
              <h3 className="summary-title title-color">About</h3>
              <br />
              <p className="summary-text">
                {info} {'\n'} {info2}
              </p>

              <span className=" vertical">
                <Link
                  target="_blank"
                  smooth
                  duration={1000}
                  // className="cta-btn--hero"/
                  to="app-highlights"
                >
                  <div className="buttonTwo">
                    <div className="circle" />
                    More Details
                  </div>
                </Link>
              </span>
            </Col>
            <Col className="app-video" md={4} sm={12}>
              <Video src={video} />
            </Col>
          </Row>
        </div>

        <section id="app-highlights" className=" background">
          <p className="highlight-text title-color">Features</p>
          <Row>
            {screenshots.map(({ src, label }, index) => {
              return (
                <Col>
                  <Image
                    imgStyle={{
                      objectFit: 'contain',
                      objectPosition: '50% 50%',
                      width: '100%',
                    }}
                    src={src}
                    className="app-screenshot"
                  />

                  <p className="label">{label}</p>
                </Col>
              );
            })}
          </Row>
        </section>
      </Container>
    </Layout>
  );
}
