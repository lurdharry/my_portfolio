/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Data = [
  { name: 'TWITTER', address: '#' },
  { name: 'DRIBBBLE', address: '#' },
  { name: 'behance', address: '#' },
  { name: 'facebook', address: '#' },
  { name: 'instagram', address: '#' },
];

const Contact = () => {
  const { contact } = useContext(PortfolioContext);

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

        <div className="links">
          {Data.map(({ name, address }) => {
            return (
              <>
                <a href={address}>{name}</a>
                <div className="line" />
              </>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Contact;
