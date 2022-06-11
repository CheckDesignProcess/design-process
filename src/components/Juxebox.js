import Image from "next/image";
import styled from "styled-components";
import { device } from "../utils/device";

const StyledJuxebox = styled.div`
  .juxebox {
    position: absolute;
    right: -90px;
    top: -50px;
    @media ${device.tablet} {
      right: 0px;
      top: 4px;
    }
    img {
      width: 220px !important;
      height: 247.83px !important;
      @media ${device.tablet} {
        width: 87px !important;
        height: 93px !important;
      }
    }
  }
`;

export default function Juxebox() {
  return (
    <StyledJuxebox>
      <div className="juxebox">
        <Image
          src="https://res.cloudinary.com/syncteams-co/image/upload/v1654745485/Group_54990_1_1_1_1_1_izqzja.png"
          alt="current_platform"
          objectFit="contain"
          width="332"
          height="374"
          quality={100}
          priority={true}
        />
      </div>
    </StyledJuxebox>
  );
}
