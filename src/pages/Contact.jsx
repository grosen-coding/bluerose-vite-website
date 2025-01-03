import { motion } from "framer-motion";
import styled from "styled-components";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

// Styled Components
const ContactContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to bottom right,
    #16a085,
    #1abc9c
  ); /* Temporary color */
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

const Contact = () => {
  return (
    <ContactContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>contact</h2>
      <p>
        Reach out to Blue Rose Design for inquiries, consultations, and service
        details. We’re here to help bring your dream landscapes to life!
      </p>
    </ContactContainer>
  );
};

export default Contact;
