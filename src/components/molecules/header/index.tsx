import * as React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header: React.FunctionComponent = React.memo((): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div style={{ zIndex: 10 }}>
      <Navbar
        collapseOnSelect={true}
        expand="lg"
        className="header-bg"
        variant="dark"
        style={{ zIndex: 10 }}
        fixed="top"
      >
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>
            Consulterdoor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Button
                className="navbar-items"
                variant="outline-light"
                onClick={() => navigate('/auth/signup')}
              >
                Become a Consultant
              </Button>
              <Nav.Link href="/auth/login">
                <span className="navbar-items">Login</span>
              </Nav.Link>
              <Button
                className="navbar-items header-sign-up-btn"
                variant="light"
                onClick={() => navigate('/auth/signup')}
              >
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
});

export { Header };
