import { motion } from "framer-motion";
import styled from "styled-components";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};

// Styled Components
const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #001f3f, #0074d9);
  color: white;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.8;
    max-width: 800px;
  }
`;

const About = () => {
  return (
    <AboutContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>About Us</h1>
      <p>
        Blue Rose Design is dedicated to creating elegant, nature-inspired
        landscapes. With a focus on creativity, precision, and sustainability,
        we bring your vision to life in harmony with the environment.
      </p>
    </AboutContainer>
  );
};

export default About;
