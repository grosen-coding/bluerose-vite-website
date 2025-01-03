import { motion } from "framer-motion";
import styled from "styled-components";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

// Styled Components
const ProcessContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    #2c3e50,
    #34495e
  ); /* Temporary color */
  color: white;
  text-align: center;
  padding: 2rem;

  h2 {
    color: ${(props) => props.theme.colors.primaryBlue};
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 300;
    text-align: right;
    display: inline-block;
    width: 60%;
    padding: 1rem;
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
      <h2>my design process</h2>
      <p>
        At Blue Rose Design, we guide you through a seamless design process that
        transforms your vision into a breathtaking reality. From consultation to
        completion, every step is tailored to your unique needs and preferences.
      </p>
    </ProcessContainer>
  );
};

export default DesignProcess;
