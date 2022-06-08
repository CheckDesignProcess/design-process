import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledFooter = styled.div`
  footer {
    border-top: 0.5px solid #565656;
    padding-top: 48px;
    padding-bottom: 96px;
    @media ${device.tablet} {
      border-top: none;
      padding-top: 30px;
      padding-bottom: 48px;
    }
    .container {
      padding-left: 0px;
      padding-right: 0px;
    }
    .copyright {
      color: #828282;
      font-size: 12px;
      @media ${device.tablet} {
        font-size: 10px;
        padding-top: 5px;
      }
    }
    .social-icon {
      @media ${device.tablet} {
        border-bottom: 0.5px solid #565656;
        padding-bottom: 10px;
        justify-content: end;
      }
      div {
        width: 45px;
        height: 45px;
        border: 0.5px solid #ffac32;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 10px;
        @media ${device.tablet} {
          width: 24.35px;
          height: 24.35px;
        }
        svg {
          @media ${device.tablet} {
            width: 10.82px;
            height: 10.82px;
          }
        }
      }
    }
    .policy {
      color: #828282;
      a {
        color: #828282;
        font-size: 12px;
        @media ${device.tablet} {
          font-size: 10px;
        }
      }
    }
    .mobile-footer {
      display: none;
      @media ${device.tablet} {
        display: block;
      }
    }
  }
`;
