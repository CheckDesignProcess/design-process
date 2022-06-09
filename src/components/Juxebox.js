import Image from "next/image";
import styled from "styled-components";

const StyledJuxebox = styled.div`
  .juxebox {
    position: absolute;
    right: -75px;
    top: -95px;
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
