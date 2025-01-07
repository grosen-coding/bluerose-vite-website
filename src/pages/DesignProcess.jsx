import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

// Styled Components
const ProcessContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 95vh; */
  width: 100%;
  color: ${(props) => props.theme.colors.accentWhite};
  background-color: ${(props) => props.theme.colors.backgroundGreen};
  padding: 2rem;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1rem;
    height: auto;
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 300px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: auto;
  }
`;

const Card = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.accentGreen};
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.primaryGreen};
    font-weight: bold;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
    padding-bottom: 0.5rem;
    width: 80%;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textGrey};
    line-height: 1.6;
    max-width: 90%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1rem;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${(props) => props.theme.colors.darkGreen};
  color: ${(props) => props.theme.colors.accentWhite};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
  z-index: 10;

  &:hover {
    background: ${(props) => props.theme.colors.primaryBlue};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.left {
    left: 1rem; /* Adjust for visibility */
  }

  &.right {
    right: 1rem; /* Adjust for visibility */
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const IndicatorContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Indicator = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? props.theme.colors.primaryBlue : "#6D6D6D"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.4s ease;

  &:hover {
    background: ${(props) => props.theme.colors.accentGreen};
  }
`;

// Main Component
const DesignProcess = () => {
  const steps = [
    {
      title: "1. Initial Consultation",
      description: "Detailed on-site meeting to understand your vision.",
    },
    {
      title: "2. Site Analysis",
      description: "Comprehensive analysis of your outdoor space.",
    },
    {
      title: "3. Conceptual Design",
      description: "Hand-drawn designs based on your feedback.",
    },
    {
      title: "4. Detailed Design",
      description: "Construction drawings and immersive renderings.",
    },
    {
      title: "5. Material Selection",
      description: "Finalizing plants and materials for your project.",
    },
    {
      title: "6. Construction",
      description: "Executing the build process with expertise.",
    },
    {
      title: "7. Completion",
      description: "Final walkthrough and maintenance guidance.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleIndicatorClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <ProcessContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      aria-labelledby="design-process-title"
    >
      <CardContainer>
        <Arrow
          className="left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </Arrow>
        <AnimatePresence mode="wait" custom={direction}>
          <Card
            key={currentIndex}
            variants={{
              enter: (direction) => ({
                x: direction === "right" ? "100%" : "-100%",
                opacity: 0,
              }),
              center: { x: 0, opacity: 1, transition: { duration: 0.4 } },
              exit: (direction) => ({
                x: direction === "right" ? "-100%" : "100%",
                opacity: 0,
                transition: { duration: 0.4 },
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
          >
            <h3>{steps[currentIndex].title}</h3>
            <p>{steps[currentIndex].description}</p>
          </Card>
        </AnimatePresence>
        <Arrow
          className="right"
          onClick={handleNext}
          disabled={currentIndex === steps.length - 1}
        >
          <FaArrowRight />
        </Arrow>
      </CardContainer>
      <IndicatorContainer>
        {steps.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Step ${index + 1}: ${steps[index].title}`}
          >
            {index + 1}
          </Indicator>
        ))}
      </IndicatorContainer>
    </ProcessContainer>
  );
};

export default DesignProcess;
