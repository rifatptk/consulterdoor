import * as React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header: React.FunctionComponent = React.memo(
  (): JSX.Element => (
    <div>
      <Navbar
        collapseOnSelect={true}
        expand="lg"
        className="main-color-bg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="home">Consulter Door</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Button
                className="navbar-items background-color"
                variant="outline-light"
              >
                Become a Consultant
              </Button>
              <Nav.Link>
                <span className="navbar-items background-color">Login</span>
              </Nav.Link>
              <Button className="navbar-items main-color" variant="light">
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
);

export { Header };
