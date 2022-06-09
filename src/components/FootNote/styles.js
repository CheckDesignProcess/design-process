import styled from "styled-components";
import { device } from "../../utils/device";

export const StyledFootNote = styled.div`
  .foot-note {
    margin: 0 auto;
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
  }
`;
