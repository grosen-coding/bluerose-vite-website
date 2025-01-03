import styled from "styled-components";
import PropTypes from "prop-types";

const HeroContainer = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible", // Prevent isVisible from being passed to the DOM
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/placeholder-image.jpg"); /* Use a placeholder or real image */
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
  background-color: black;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

const HeroSection = ({ isVisible }) => {
  return (
    <HeroContainer isVisible={isVisible}>
      <h1>Welcome to Blue Rose Design</h1>
      <p>Elevating landscapes with creativity and precision.</p>
    </HeroContainer>
  );
};
HeroSection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default HeroSection;
