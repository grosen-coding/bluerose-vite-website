import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Styled Components
const ProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(to bottom right, #2c3e50, #34495e);
  color: white;
  overflow: hidden;
`;

const Title = styled.h2`
  color: #d6d6dc;
  margin-top: -2rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 300;
  text-align: right;
  width: 60%;
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
`;

const Card = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.primaryBlue};
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d6d6dc;
  text-align: center;
  padding: 2rem;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondaryGreen};
    font-weight: 300;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${(props) => props.theme.colors.darkGreen};
  color: white;
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

  &:hover {
    background: ${(props) => props.theme.colors.primaryBlue};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.left {
    left: -70px;
  }

  &.right {
    right: -70px;
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
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.secondaryGreen};
  }
`;

// Main Component
const DesignProcess = () => {
  const steps = [
    {
      title: "1. Initial Consultation",
      description:
        "Our process begins with a detailed on-site meeting to understand your needs, preferences, and project vision.",
    },
    {
      title: "2. Site Analysis & Planning",
      description:
        "We conduct a thorough site analysis, capturing measurements and developing a base plan.",
    },
    {
      title: "3. Conceptual Design",
      description:
        "We create hand-drawn concepts and layouts, refining ideas based on your feedback.",
    },
    {
      title: "4. Detailed Design & Visuals",
      description:
        "Detailed construction drawings and immersive 3D renderings bring the design to life.",
    },
    {
      title: "5. Material Selection",
      description:
        "Finalize material choices, plants, and finishes to balance aesthetics, functionality, and budget.",
    },
    {
      title: "6. Construction Implementation",
      description:
        "Our expert team begins the build process, ensuring clear communication throughout.",
    },
    {
      title: "7. Project Completion & Aftercare",
      description:
        "We complete a final walkthrough and offer guidance on maintaining your new landscape.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const cardVariants = {
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
  };

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
    <ProcessContainer>
      <Title>design process</Title>
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
            variants={cardVariants}
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
          >
            {index + 1}
          </Indicator>
        ))}
      </IndicatorContainer>
    </ProcessContainer>
  );
};

export default DesignProcess;
