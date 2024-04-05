import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div>
      <header>
        <Navbar expand="lg" variant="dark" className="bg-dark" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>pyshop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>CART
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>LOGIN
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
