import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledAbout = styled.div`
  background: #1b1b1b;
  min-height: 100vh;
  height: auto;

  main {
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 220px;
    @media ${device.tablet} {
      margin-top: 75px;
      margin-bottom: 48px;
    }

    header {
      color: #bdbdbd;
      font-weight: 600;
      font-size: 48px;
      font-family: AvenirHeavy;
      margin-bottom: 15px;
      @media ${device.tablet} {
        font-size: 24px;
      }
    }
    .page-content {
      p {
        font-weight: 400;
        font-size: 24px;
        color: #828282;
        font-family: AvenirBook;
        text-align: justify;
        line-height: 29px;
        @media ${device.tablet} {
          font-size: 16px;
          line-height: 19.2px;
        }
        a {
          color: #ffac32;
          text-decoration: underline;
        }
      }
    }
  }
`;
