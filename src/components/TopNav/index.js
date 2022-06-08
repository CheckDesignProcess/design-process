import React from "react";
import {
  Container,
  Offcanvas,
  Nav,
  Button,
  Form,
  NavDropdown,
  FormControl,
  Navbar,
  InputGroup,
} from "react-bootstrap";

//styles and images
import { StyledNav } from "./styles";
import { BrandLogo } from "../../img/file";

export default function TopNav() {
  return (
    <StyledNav>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">{BrandLogo}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="mx-md-5">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="me-md-5">
                About
              </Nav.Link>
              <Nav.Link href="/share">Share</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <InputGroup className="">
                <FormControl
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Get Updates
                </Button>
              </InputGroup>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledNav>
  );
}
