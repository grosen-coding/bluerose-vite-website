import { motion } from "framer-motion";
import styled from "styled-components";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
};

// Styled Components
const ShowcaseContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    to bottom right,
    #8e44ad,
    #9b59b6
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

const Showcase = () => {
  return (
    <ShowcaseContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Our Showcase</h1>
      <p>
        Explore some of our favorite projects and landscape transformations. At
        Blue Rose Design, we create outdoor spaces that inspire and elevate.
      </p>
    </ShowcaseContainer>
  );
};

export default Showcase;
