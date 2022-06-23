import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledMobileNav = styled.div`
  background: #1b1b1b;
  height: 100vh;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-bottom: 2rem;
  width: 100%;
  .header {
    .brand-logo {
      svg {
        width: 100px;
      }
    }
  }
  .nav-links-wrapper {
    margin-top: 100px;
    a {
      font-weight: 500;
      font-size: 18px;
      color: #f7f7f7;
    }
  }
`;
