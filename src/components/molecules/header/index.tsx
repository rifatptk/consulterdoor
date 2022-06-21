import * as React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface IProps { }

const Header: React.FunctionComponent<IProps> = React.memo(
  ({ }: IProps): JSX.Element => (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link aria-disabled={true}>
                <NavLink to="/home" className="nav-link">
                  Features
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about" className="nav-link">
                  Pricing
                </NavLink>
              </Nav.Link>
              <Nav.Link aria-disabled={true}>
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
);

export { Header };
