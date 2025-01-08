import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";
import PageLoader from "../components/Loader"; // Import loader
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
  height: calc(100vh - 100px);
  color: ${(props) => props.theme.colors.darkGreen};
  padding: 0 2rem 2rem;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1rem;
    height: auto;
  }
`;

const IntroParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.2;
  text-align: center;
  margin: 3rem 0 2rem;
  max-width: 900px;
  color: ${(props) => props.theme.colors.lightGrey};

  span {
    color: ${(props) => props.theme.colors.titleColor};
    font-weight: bold;
    font-style: italic;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
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
  background: ${(props) => props.theme.colors.lightGrey};
  border: 1px solid ${(props) => props.theme.colors.titleColor};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: justify;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.primaryGreen};
    font-weight: bold;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
    padding-bottom: 0.5rem;
    width: 90%;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textGrey};
    line-height: 1.2;
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
  background: ${(props) => props.theme.colors.primaryBlue};
  color: ${(props) => props.theme.colors.accentWhite};
  border: none;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  opacity: 0.7;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    opacity: 1;
    transform: scale(1.1) translateY(-50%);
  }

  &:disabled {
    opacity: 0.5;
    transform: scale(1) translateY(-50%);
    cursor: not-allowed;
  }

  &.left {
    position: absolute;
    left: 5px; /* Adjust for visibility */
  }

  &.right {
    position: absolute;
    right: 5px;
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
      description:
        "Our design journey begins with an in-depth consultation where we take the time to truly understand your vision. During this on-site meeting, we discuss your goals, preferences, and ideas while exploring the potential of your outdoor space. This is where we align our passion for creativity with your aspirations, ensuring every detail is captured to begin crafting a design that resonates with your unique needs. We value open communication, and this step sets the tone for a collaborative partnership that will carry through every phase of the process.",
    },
    {
      title: "2. Site Analysis",
      description:
        "With precision and care, we conduct a thorough site analysis to assess the characteristics of your property. From soil quality and topography to sunlight patterns and existing vegetation, every aspect is meticulously evaluated. This step allows us to understand the unique challenges and opportunities your site offers. By studying these elements in detail, we lay the groundwork for a design that integrates seamlessly with the natural environment, ensuring beauty, functionality, and sustainability.",
    },
    {
      title: "3. Conceptual Design",
      description:
        "Our conceptual design phase brings your vision to life through initial sketches and layouts. These hand-drawn designs reflect our shared ideas, capturing the essence of your dream landscape. We embrace creativity and artistry at this stage, blending innovation with the natural beauty of your surroundings. Feedback is encouraged as we refine the design, ensuring it aligns perfectly with your expectations while adding the unique touch that sets our work apart.",
    },
    {
      title: "4. Detailed Design",
      description:
        "This phase is where our passion for precision takes center stage. We develop comprehensive construction drawings and detailed renderings that provide a clear, immersive visualization of your project. From structural layouts to intricate planting plans, every detail is accounted for. These designs not only guide the construction process but also allow you to see the full potential of your outdoor space, ensuring every element aligns with your vision.",
    },
    {
      title: "5. Material Selection",
      description:
        "Selecting the right materials and plants is an integral part of bringing your design to life. With our expertise and attention to detail, we guide you through this process, helping you choose elements that complement the aesthetic and functional goals of your project. From elegant stonework and sustainable materials to vibrant, native plant species, we ensure every choice enhances the beauty and longevity of your landscape.",
    },
    {
      title: "6. Construction",
      description:
        "The construction phase is where your dream landscape begins to take shape. Collaborating with top-tier contractors and craftsmen, we oversee every aspect of the build process with meticulous attention to detail. From grading and excavation to planting and finishing touches, our team ensures that the design is executed flawlessly. Our commitment to excellence guarantees that the final result exceeds your expectations and stands as a testament to our shared vision.",
    },
    {
      title: "7. Completion!",
      description:
        "Time to wrap up! As your project reaches completion, we conduct a thorough walkthrough to ensure every element is executed to perfection. This final step includes a detailed review of your new outdoor space, as well as guidance on maintenance and care to preserve its beauty. Our relationship doesn’t end here—our passion for landscaping means we are always available to provide support and advice as your landscape matures and flourishes over time.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Minimum loader time
    return () => clearTimeout(preloadTimeout);
  }, []);

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

  if (isLoading) {
    return <PageLoader active={isLoading} />;
  }

  return (
    <ProcessContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      role="region"
      aria-labelledby="design-process-section"
    >
      <IntroParagraph>
        With decades of experience, I’ve perfected a seamless,{" "}
        <span>seven-step design process</span> that transforms outdoor spaces
        into breathtaking landscapes. This approach ensures efficiency,
        accuracy, and open communication, making the journey enjoyable and
        stress-free. From the initial consultation to project completion, every
        step is meticulously planned to deliver unmatched quality and elegance.
      </IntroParagraph>
      <CardContainer>
        <Arrow
          className="left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft />
        </Arrow>
        <AnimatePresence mode="wait" custom={direction}>
          {steps[currentIndex] && (
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
          )}
        </AnimatePresence>
        <Arrow
          className="right"
          onClick={handleNext}
          disabled={currentIndex >= steps.length - 1}
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
