import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledAbout = styled.div`
  background: #1b1b1b;
  min-height: 100vh;
  height: auto;

  main {
    margin: 0 auto;
    width: 600px;
    margin-top: 200px;
    margin-bottom: 220px;
    @media ${device.tablet} {
      margin-top: 140px;
      margin-bottom: 48px;
      width: auto;
      padding-left: 10px;
      padding-right: 10px;
    }

    header {
      color: #bdbdbd;
      font-weight: 500;
      font-size: 42px;
      font-family: AvenirBook;
      margin-bottom: 15px;
      @media ${device.tablet} {
        font-size: 24px;
      }
    }
    .page-content {
      p {
        font-weight: 500;
        font-size: 20px;
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
