import { motion } from "framer-motion";
import styled from "styled-components";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};

// Styled Components
const ProcessContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    #2c3e50,
    #34495e
  ); /* Temporary color */
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

const DesignProcess = () => {
  return (
    <ProcessContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Our Design Process</h1>
      <p>
        At Blue Rose Design, we guide you through a seamless design process that
        transforms your vision into a breathtaking reality. From consultation to
        completion, every step is tailored to your unique needs and preferences.
      </p>
    </ProcessContainer>
  );
};

export default DesignProcess;
