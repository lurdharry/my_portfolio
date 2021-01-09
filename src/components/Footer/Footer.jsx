/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      {/* <Container> */}
      <div className="head">© 2013 PAVEL HUZA . MADE IN CZECH REPUBLIC</div>
      <div className="flex">
        <div className="button button__1">
          <i className={`fa fa-${name || 'twitter'} fa-inverse`} />
          follow me on twitter
        </div>
        <div className="button button__2">
          <i className={`fa fa-${name || 'dribbble'} fa-inverse`} />
          follow me on dribbble
        </div>
      </div>
      <div className="details">
        This site was built with great tools like Photoshop, Sublime Text 2 & Codekit. Font used in
        headlines is Brandon Grotesque, font in body copy is FF Meta Serif Web Pro. Both fonts are
        served up via Typekit.
      </div>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
