import React from "react";
import { Offcanvas } from "react-bootstrap";

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
      </StyledMobileNav>
    </Offcanvas>
  );
}
