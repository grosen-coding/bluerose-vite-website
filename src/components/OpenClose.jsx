import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const SvgContainer = styled.svg`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  user-select: none;
  transform: ${(props) => (props.isActive ? "rotate(45deg)" : "rotate(0deg)")};
`;

const Line = styled.path`
  fill: none;
  transition:
    stroke-dasharray 400ms,
    stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;

  &.top {
    stroke-dasharray: ${(props) => (props.isActive ? "40 139" : "40 139")};
    stroke-dashoffset: ${(props) => (props.isActive ? "-98" : "0")};
  }

  &.middle {
    stroke-dasharray: 40 140;
    stroke-dashoffset: 0;
  }

  &.bottom {
    stroke-dasharray: ${(props) => (props.isActive ? "40 180" : "40 180")};
    stroke-dashoffset: ${(props) => (props.isActive ? "-138" : "0")};
  }
`;

const OpenClose = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <SvgContainer
      className="ham ham1"
      viewBox="0 0 100 100"
      width="80"
      isActive={isActive}
      onClick={toggleActive}
    >
      <Line
        className="line top"
        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        isActive={isActive}
      />
      <Line className="line middle" d="m 30,50 h 40" isActive={isActive} />
      <Line
        className="line bottom"
        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        isActive={isActive}
      />
    </SvgContainer>
  );
};

export default OpenClose;
