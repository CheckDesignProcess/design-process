import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledNav = styled.div`
  .fixed-top {
    position: fixed;
    top: 0;
    right: 0px;
    left: 0px;
    z-index: 1030;
    padding-left: 36px;
    padding-right: 36px;
    @media ${device.tablet} {
      padding-left: 25px;
      padding-right: 25px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
  nav {
    @media ${device.tablet} {
      background: #1b1b1b;
    }
  }

  .hamburger-icon {
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }
  .navbar-brand {
    font-size: 24px;
    @media ${device.tablet} {
      font-size: 20px;
    }
  }
  .container {
    @media ${device.tablet} {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  .navbar-nav {
    padding-top: 2rem;
    padding-bottom: 2rem;
    .nav-link {
      color: #f7f7f7;
      font-family: AvenirBook;
      font-size: 16px;
      &:hover {
        color: #f7f7f7;
      }
    }
  }

  a {
    color: #f7f7f7 !important;
  }

  .input-group {
    padding: 7px;
    border: 1px solid #252525;
    border-radius: 8px;
    button {
      width: 137px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bolder;
      font-size: 16px;
      font-family: AvenirBook;
      color: #f7f7f7;
      background: #252525;
      border-radius: 8px;
      z-index: 5;
      border: 0;
    }
    input {
      height: 44px;
      width: 250px;
      border: 0;
      background: inherit;
      color: #5c5c5c;
      font-size: 14px;
    }
  }
  .input-group
    > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
