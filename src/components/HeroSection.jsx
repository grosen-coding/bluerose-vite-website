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
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Styled Components
const HeroContainer = styled(motion.section).withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
  background-color: black;

  h2 {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 1.8px;
  }
`;

const HeroSection = ({ isVisible, onComplete }) => {
  return (
    <HeroContainer
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onAnimationComplete={onComplete} // Trigger when animation completes
    >
      <motion.h2 variants={textVariants}>
        Precision and Creativity, Drawn from Nature
      </motion.h2>
    </HeroContainer>
  );
};

HeroSection.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default HeroSection;
