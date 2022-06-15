import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledExistingDefined = styled.div`
  background: #1b1b1b;
  min-height: 100vh;
  height: auto;

  main {
    width: 600px;
    margin: 0 auto;
    margin-top: 240px;
    margin-bottom: 40px;
    position: relative;
    @media ${device.tablet} {
      width: auto;
      margin-top: 140px;
      margin-bottom: 0px;
      padding-left: 10px;
      padding-right: 10px;
    }
    header {
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
      .product {
        color: #bdbdbd;
        font-weight: 600;
        font-size: 42px;
        font-family: AvenirHeavy;
        line-height: 56px;
        @media ${device.tablet} {
          font-size: 24px;
          margin-top: 28px;
          margin-bottom: 4px;
          line-height: 36px;
        }
      }
      .takeaway {
        font-weight: 400;
        font-size: 24px;
        color: #bdbdbd;
        @media ${device.tablet} {
          font-size: 16px;
        }
      }
      .product-list {
        font-weight: 400;
        font-size: 18px;
        color: #828282;
        font-family: AvenirBook;
        @media ${device.tablet} {
          font-size: 14px;
        }
      }
    }
    .collapse-section {
      background: #24211c;
      padding-left: 15px;
      padding-right: 15px;
      border: 0.5px solid #765524;
      border-radius: 8px;
      button {
        width: 100%;
        border-radius: 0px;
        border: 0;
        background: inherit;
        padding-left: 0px;
        padding-right: 0px;
        height: 56px;
        .process-title {
          color: #bdbdbd;
          font-weight: 600;
          font-size: 18px;
          font-family: AvenirHeavy;
          padding-top: 3px;
          @media ${device.tablet} {
            font-size: 16px;
            line-height: 17px;
            width: 100%;
            text-align: left;
          }
        }
        .process-title-plain {
          @media ${device.tablet} {
            font-size: 14px;
            line-height: 17px;
            width: 100%;
            text-align: left;
          }
        }
      }
      .collapse-text {
        color: #828282;
        font-weight: 400;
        font-size: 16px;
        width: 95%;
        padding-bottom: 18px;
        padding-top: 2px;
        text-align: justify;
        @media ${device.tablet} {
          font-size: 14px;
          width: 100%;
          text-align: left;
        }
      }
    }

    form {
      @media ${device.tablet} {
        margin-top: 96px;
      }
    }

    .check-box-pointer {
      margin-bottom: 24px;
      @media ${device.tablet} {
        margin-bottom: 68px;
      }
    }

    .check-box-pointer-mobile {
      @media ${device.tablet} {
        margin-bottom: 0px;
      }
    }

    .check-wrapper {
      position: absolute;
      z-index: 5;
      left: -50px;
      top: 10px;
      @media ${device.tablet} {
        left: 0px;
        top: -35px;
      }
    }

    .process-wrapper-mobile {
      align-items: flex-start !important;
    }

    .collapse-form-section {
      padding-right: 15px;
      width: 100%;
      button {
        width: 100%;
        border-radius: 0px;
        border: 0;
        background: inherit;
        padding-left: 0px;
        padding-right: 0px;
        height: 56px;
        .process-title {
          color: #bdbdbd;
          font-weight: 500;
          font-size: 20px;
          padding-top: 3px;
          text-align: left;
          line-height: 26px;
          @media ${device.tablet} {
            font-size: 17px;
            text-align: left;
            line-height: 20px;
          }
        }
      }
      .collapse-text {
        color: #828282;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        width: 95%;
        padding-top: 2px;
        @media ${device.tablet} {
          padding-top: 15px;
          font-size: 14px;
          width: 100%;
        }
      }
      .collapse-text-bottom {
        border-bottom: 0.5px solid #2b2b2b;
        padding-bottom: 18px;
      }
    }
    .progress {
      background-color: #565656;
      height: 1.5px;
      @media ${device.tablet} {
        height: 1px;
      }
    }
    .progress-bar {
      background-color: #ffac32;
    }
    .content-page {
      .gather {
        color: #e0e0e0;
        font-weight: 600;
        font-size: 24px;
        font-family: AvenirHeavy;
        @media ${device.tablet} {
          font-size: 18px;
          margin-top: 70px;
        }
      }
      .gather-mobile {
        display: none;
        @media ${device.tablet} {
          display: block;
        }
      }
      .number {
        font-weight: 600;
        font-size: 18px;
        color: #393939;
        font-family: AvenirHeavy;
        @media ${device.tablet} {
          font-size: 14px;
        }
        span {
          font-weight: 600;
          font-size: 18px;
          color: #393939;
          font-family: AvenirHeavy;
          @media ${device.tablet} {
            font-size: 14px;
          }
        }
        .number-color {
          color: #ffac32;
        }
      }
      .question {
        color: #393939;
        font-weight: 600;
        font-size: 24px;
        font-family: AvenirHeavy;
        @media ${device.tablet} {
          font-size: 16px;
        }
      }
    }
  }

  .next-container {
    position: sticky;
    bottom: 0;
    z-index: 10;
    background: #1b1b1b;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 12px;
    border-top: 1px solid #2b2b2b;
    margin-bottom: 120px;
    @media ${device.tablet} {
      padding-top: 12px;
      padding-bottom: 50px;
      margin-bottom: 0px;
    }
    .next-wrapper {
      width: 600px;
      @media ${device.tablet} {
        width: 100%;
      }
      .next {
        color: #393939;
        font-weight: 600;
        font-size: 18px;
        font-family: AvenirHeavy;
        cursor: pointer;
        @media ${device.tablet} {
          font-size: 14px;
        }
      }
      .note {
        color: #bdbdbd;
        font-weight: 600;
        font-size: 20px;
        font-family: AvenirHeavy;
        @media ${device.tablet} {
          font-size: 14px;
        }
      }
    }
  }

  .ant-checkbox-input {
    border: 0;
  }
  .ant-checkbox-inner {
    width: 30.46px;
    height: 30.46px;
    border: 2px solid #bdbdbd !important;
    border-radius: 8px;
    background: inherit;
    box-shadow: none;
    @media ${device.tablet} {
      width: 26.87px;
      height: 26.87px;
    }
  }
  .ant-checkbox-inner::after {
    width: 9px;
    height: 15px;
    box-shadow: none;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #ffac32;
    border-color: #ffac32 !important;
    box-shadow: none;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #ffac32;
    box-shadow: none;
  }
`;
