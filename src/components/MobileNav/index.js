import React from "react";
import { Offcanvas } from "react-bootstrap";
import Link from "next/link";

//styles
import { StyledMobileNav } from "./styles";
import { BrandLogo, CloseImage } from "../../img/file";

export default function MobileNav({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement={"end"}>
      <StyledMobileNav>
        <div className="header d-flex justify-content-between align-items-center">
          <div className="brand-logo">{BrandLogo}</div>
          <div onClick={handleClose}>{CloseImage}</div>
        </div>
        <div className="nav-links-wrapper text-center">
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="my-5">
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div>
            <Link href="/share">
              <a>Share</a>
            </Link>
          </div>
        </div>
      </StyledMobileNav>
    </Offcanvas>
  );
}
