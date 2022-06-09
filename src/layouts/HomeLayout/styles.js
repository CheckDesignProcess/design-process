import styled from "styled-components";
import { device } from "../../utils/device";

export const HomeContainer = styled.div`
  background: #1b1b1b;
  min-height: 100vh;
  height: auto;
  .progress {
    background-color: #565656;
    height: 0.5px;
  }
  .progress-bar {
    background-color: #ffac32;
  }
  main {
    /* width: 824px; */
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 100px;
    @media ${device.tablet} {
      width: auto;
      margin-top: 48px;
      margin-bottom: 48px;
    }
    header {
      margin-bottom: 75px;
      @media ${device.tablet} {
        margin-bottom: 58px;
      }
      div {
        color: #bdbdbd;
        font-size: 48px;
        font-family: AvenirHeavy;
        @media ${device.tablet} {
          font-size: 24px;
          width: 80%;
          line-height: 29px;
          margin-bottom: 25px;
        }
      }
      p {
        color: #828282;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 30px;
        width: 96%;
        @media ${device.tablet} {
          font-size: 16px;
          width: 80%;
          line-height: 19.2px;
        }
      }
      button {
        filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
        border-radius: 8px;
        border: 0.5px solid #5c5c5c !important;
        width: 139px;
        height: 52px;
        color: #f7f7f7;
        font-family: AvenirHeavy;
        font-size: 16px;
        background: inherit !important;
      }
    }
    .page-content {
      .title {
        color: #ffac32;
        font-weight: 600;
        font-size: 18px;
        font-family: AvenirHeavy;
        border-bottom: 0.5px solid #565656;
        line-height: 46px;
        @media ${device.tablet} {
          font-size: 16px;
          line-height: 40px;
        }
      }
      .product-border-bottom {
        border-bottom: 0.5px solid #565656;
      }
      .product {
        padding: 20px 0px;
        .head {
          color: #e0e0e0;
          font-weight: 600;
          font-family: AvenirHeavy;
          font-size: 24px;
          cursor: pointer;
          @media ${device.tablet} {
            font-size: 18px;
          }
        }
        .head-gray {
          color: #828282;
          font-weight: 600;
          font-family: AvenirHeavy;
          font-size: 24px;
          display: flex;
          align-items: center;
          @media ${device.tablet} {
            font-size: 18px;
          }
          .badge {
            width: 94px;
            height: 30px;
            background: rgba(255, 172, 50, 0.08) !important;
            border-radius: 8px;
            color: #ffac32;
            font-weight: 600;
            font-family: AvenirHeavy;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 15px;
            cursor: pointer;
          }
        }
        .content {
          color: #828282;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          @media ${device.tablet} {
            font-size: 14px;
          }
        }
        .number {
          color: #828282;
          font-weight: bolder;
          font-size: 18px;
          @media ${device.tablet} {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
