import { motion } from "framer-motion";
import styled from "styled-components";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  background: linear-gradient(to bottom right, #001f3f, #0074d9);
  color: white;
  text-align: center;
  padding: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 300;
    text-align: right;
    display: inline-block;
    width: 60%;
    padding: 1rem;
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
      <h2>about</h2>
      <p>
        Blue Rose Design is dedicated to creating elegant, nature-inspired
        landscapes. With a focus on creativity, precision, and sustainability,
        we bring your vision to life in harmony with the environment.
      </p>
    </AboutContainer>
  );
};

export default About;
