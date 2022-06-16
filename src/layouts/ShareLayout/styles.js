import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledShareLayout = styled.div`
  background: #1b1b1b;
  min-height: 100vh;
  height: auto;

  main {
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 220px;
    width: 600px;
    @media ${device.tablet} {
      margin-top: 140px;
      margin-bottom: 300px;
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
      button {
        color: #bdbdbd;
        font-size: 16px;
        filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
        border-radius: 8px;
        border: 0.5px solid #5c5c5c;
        background: inherit;
        min-width: 161px;
        width: auto;
        height: 52px;
      }
    }
  }
`;
