import { Link as GLink } from 'gatsby';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="collaps" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto pt-3">
            <GLink smooth to="/">
              <Nav.Link href="/#hero" className="mr-4 ml-4">
                Home
              </Nav.Link>
            </GLink>
            <GLink smooth to="/#projects">
              <Nav.Link href="projects" className="mr-4 ml-4">
                Works
              </Nav.Link>
            </GLink>
            <Link smooth to="footer" className="pointer">
              <Nav.Link href="footer" className="mr-4 ml-4">
                Contact
              </Nav.Link>
            </Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
