import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainContent = styled(motion.main)`
  width: 100%;
  height: 100%;
  margin-top: 6rem; /* Adjust to avoid overlap with Header */
  color: ${(props) => props.theme.colors.accentWhite};
  background-color: ${(props) =>
    props.theme.colors.backgroundGreen}; /* Optional */

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1rem;
    margin-top: 5rem;
  }
`;

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Main = ({ children }) => (
  <MainContent
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    role="main"
    aria-label="Main content area"
    tabIndex="-1" // Focusable for navigation
    transition={{ duration: 0.5 }}
  >
    {children}
  </MainContent>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
