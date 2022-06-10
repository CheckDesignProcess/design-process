import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Nav,
  Button,
  Form,
  FormControl,
  Navbar,
  InputGroup,
} from "react-bootstrap";

//components
import MobileNav from "../MobileNav";

//styles and images
import { StyledNav } from "./styles";
import { BrandLogo, HamburgerIcon } from "../../img/file";

export default function TopNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <StyledNav>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">{BrandLogo}</Navbar.Brand>
          <span className="hamburger-icon" onClick={handleShow}>
            {HamburgerIcon}
          </span>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">
                <a className="nav-link mx-md-5">Home</a>
              </Link>
              <Link href="/about">
                <a className="nav-link me-md-5">About</a>
              </Link>
              <Link href="/share">
                <a className="nav-link">Share</a>
              </Link>
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

      <MobileNav show={show} handleClose={handleClose} />
    </StyledNav>
  );
}
