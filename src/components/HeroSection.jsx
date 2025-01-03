import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, when: "beforeChildren", staggerChildren: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Styled Components
const HeroContainer = styled(motion.section).withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
  background-color: black;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

const HeroSection = ({ isVisible }) => {
  return (
    <HeroContainer
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.h1 variants={textVariants}>Welcome to Blue Rose Design</motion.h1>
      <motion.p variants={textVariants}>
        Elevating landscapes with creativity and precision.
      </motion.p>
    </HeroContainer>
  );
};

HeroSection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default HeroSection;
