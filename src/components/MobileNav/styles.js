import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledMobileNav = styled.div`
  background: #1b1b1b;
  height: 100vh;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 12px;
  padding-bottom: 2rem;
  width: 100%;
  .header {
    .brand-logo {
      svg {
        @media ${device.tablet} {
          width: 220px;
        }
      }
    }
  }
  .nav-links-wrapper {
    margin-top: 100px;
    a {
      font-weight: 400;
      font-size: 18px;
      color: #f7f7f7;
    }
  }
`;
