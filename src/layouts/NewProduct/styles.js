import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledNewProduct = styled.div`
  background: #1b1b1b;
  min-height: 100vh;
  height: auto;

  main {
    /* width: 824px; */
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 100px;
    position: relative;
    @media ${device.tablet} {
      width: auto;
      margin-top: 48px;
      margin-bottom: 48px;
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
        font-size: 48px;
        font-family: AvenirHeavy;
      }
      .takeaway {
        font-weight: 400;
        font-size: 24px;
        color: #bdbdbd;
      }
      .product-list {
        font-weight: 400;
        font-size: 22px;
        color: #828282;
        font-family: AvenirBook;
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
        }
      }
      .collapse-text {
        color: #828282;
        font-weight: 400;
        font-size: 16px;
        width: 95%;
        padding-bottom: 18px;
        padding-top: 2px;
      }
    }

    .check-wrapper {
      position: absolute;
      z-index: 5;
      left: -50px;
      top: 10px;
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
          font-size: 24px;
          padding-top: 3px;
        }
      }
      .collapse-text {
        color: #828282;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        width: 95%;
        padding-top: 2px;
      }
      .collapse-text-bottom {
        border-bottom: 0.5px solid #2b2b2b;
        padding-bottom: 18px;
      }
    }
    .progress {
      background-color: #565656;
      height: 0.5px;
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
      }
      .number {
        font-weight: 600;
        font-size: 18px;
        color: #393939;
        font-family: AvenirHeavy;
      }
      .question {
        color: #393939;
        font-weight: 600;
        font-size: 24px;
        font-family: AvenirHeavy;
      }
    }
    .next-wrapper {
      .next {
        color: #393939;
        font-weight: 600;
        font-size: 24px;
        font-family: AvenirHeavy;
        cursor: pointer;
      }
      .note {
        color: #bdbdbd;
        font-weight: 600;
        font-size: 24px;
        font-family: AvenirHeavy;
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
