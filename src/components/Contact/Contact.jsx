import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <div className="title">OK, LET’S CREATE</div>
        <div className="title">SOMETHING GREAT</div>
        <div className="subtitle">
          If you like my work and have some cool project to work on, just send me direct message or
          contact me through social sites listed below.
        </div>

        <div className="button">
          <i className={`fa fa-${name || 'send'} fa-inverse`} />
          GET IN TOUCH
        </div>
      </Container>
    </section>
  );
};

export default Contact;
