import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroContainer = styled(motion.create("section"))`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - 100px);
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
    url("https://picsum.photos/id/1018/1920/1080") no-repeat center center/cover;
  color: ${(props) => props.theme.colors.accentWhite};

  @media (max-width: 768px) {
    padding: 1.5rem;
    background-position: top;
  }
`;

const HeroText = styled.div`
  width: 100%;

  h2 {
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 1.6;
    font-family: "Montserrat", sans-serif;
    color: ${(props) => props.theme.colors.accentWhite};
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    text-align: center;
    font-style: italic;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const CTAButton = styled(motion.create(Link))`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.accentWhite};
  background-color: ${(props) => props.theme.colors.primaryGreen};
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.accentGreen};
    transform: translateY(-5px);
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Delay between letters
      delay: 0.5, // Wait for HeroSection to load
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const buttonAnimation = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 3.5 },
  },
};

const HeroSection = () => {
  const message = "Precision and Creativity, Drawn From Nature";

  return (
    <HeroContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      role="main"
      aria-label="Introduction and call to action"
      aria-labelledby="hero-heading"
    >
      <HeroText>
        <motion.h2
          id="hero-heading"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {message.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
      </HeroText>
      <CTAButton
        to="/services"
        initial="hidden"
        animate="visible"
        variants={buttonAnimation}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Discover more about our services"
      >
        Discover More
      </CTAButton>
    </HeroContainer>
  );
};

export default HeroSection;
