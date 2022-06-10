import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledMobileNav = styled.div`
  background: #1b1b1b;
  height: 100vh;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
  padding-bottom: 2rem;
  .header {
    .brand-logo {
      svg {
        @media ${device.tablet} {
          width: 160px;
        }
      }
    }
  }
`;
