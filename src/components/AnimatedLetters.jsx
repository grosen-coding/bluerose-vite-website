import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const textAnimate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const textAnimateHover = keyframes`
  0% {
    color: grey;
    transform: scale(1);
  }
  50% {
    color: blue;
    transform: scale(1.1);
  }
  100% {
    color: grey;
    transform: scale(1);
  }
`;

const Letter = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(-50%);
  animation: ${textAnimate} 0.5s ease forwards;
  animation-delay: ${(props) => props.delay}s;

  ${(props) =>
    props.hover &&
    css`
      &:hover {
        animation: ${textAnimateHover} 1s ease-in-out infinite;
      }
    `}
`;

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <Letter
          key={`${char}-${i}`}
          delay={(i + idx) * 0.1}
          hover={letterClass === 'text-animate-hover'}
        >
          {char}
        </Letter>
      ))}
    </span>
  );
};

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number.isRequired,
};

export default AnimatedLetters;