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
      <Navbar expand="lg" fixed="top">
        <Link href="/">
          <a className="navbar-brand">{BrandLogo}</a>
        </Link>
        <span className="hamburger-icon" onClick={handleShow}>
          {HamburgerIcon}
        </span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/">
              <a className="nav-link mx-md-4">Home</a>
            </Link>
            <Link href="/about">
              <a className="nav-link me-md-4">About</a>
            </Link>
            <Link href="/share">
              <a className="nav-link">Share</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <MobileNav show={show} handleClose={handleClose} />
    </StyledNav>
  );
}
