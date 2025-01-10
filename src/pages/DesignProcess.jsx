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
  font-size: 1.2rem;
  line-height: 1.5;
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
  height: 380px;

  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: auto;
  }
`;

const Card = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(35, 108, 214, 0.3);
  border: 1px solid ${(props) => props.theme.colors.titleColor};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  text-align: justify;

  h3 {
    font-size: 1.7rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.titleColor};
    font-weight: 700;
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
    padding-bottom: 0.5rem;
    width: 90%;
    letter-spacing: normal;
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.textGrey};
    line-height: 1.5;
    width: 90%;
    opacity: 0.8;
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
  background: ${(props) => props.theme.colors.primaryGreen};
  color: ${(props) => props.theme.colors.accentWhite};
  border: none;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  opacity: 0.8;
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
    left: 10px; /* Adjust for visibility */
  }

  &.right {
    position: absolute;
    right: 10px;
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
        "Our design journey begins together with a free, in-depth consultation at your home, where I take the time to truly understand both you, and your vision. During this on-site meeting, we discuss your goals, preferences, and ideas while exploring the potential of your outdoor space. This is where I learn and understand how to align my passion for creativity and detail with your aspirations, ensuring every aspect is captured. This meeting helps me begin crafting a design that resonates with your unique needs and requests. I value open communication, and this step sets the tone for a collaborative partnership that will carry through every phase of the process.",
    },
    {
      title: "2. Site Analysis",
      description:
        "With precision and care, I conduct a thorough site analysis to assess the characteristics of your property. From soil quality and topography to sunlight patterns and existing vegetation, every aspect is meticulously evaluated. This step allows me to also understand the unique challenges and opportunities your site may offer. By studying these elements in detail, I lay the groundwork for a design that integrates seamlessly with the natural environment, ensuring beauty, functionality, and sustainability. My commitment to understanding your property ensures that the final design is not only visually stunning, but is built to last and thrive for years to come.",
    },
    {
      title: "3. Conceptual Design",
      description:
        "My conceptual design phase begins to bring your vision to life through initial sketches, discussions, pictures and layouts. I enjoy the lost art of hand-drafting preliminary designs for the freedom it allows me to reflect and shape our shared ideas, capturing the essence of your dream landscape. I become very excited to express my creativity and artistry at this stage, blending innovation and experience with the natural beauty of your surroundings. Feedback is strongly encouraged as we refine the design, ensuring it aligns perfectly with your expectations while adding the unique touch that sets my work apart.",
    },
    {
      title: "4. Detailed Design",
      description:
        "This phase is where my passion for precision takes center stage. I use multiple kinds of CAD-based software to develop a set of comprehensive construction drawings and detailed 3D renderings that provide a clear, immersive visualization of your project. From structural layouts to intricate planting plans, every detail is accounted for, and explained. These designs not only guide and help understand the construction process, but also allow you to see the full potential of your outdoor space, ensuring every element aligns with your vision. I believe that the beauty of a landscape lies in the details, and this step is where we bring those details to life.",
    },
    {
      title: "5. Material Selection",
      description:
        "Selecting the right materials and plants is an integral part of bringing your design to life. With my experience, expertise and attention to detail, I comfortably guide you through this process, helping to recommend and choose elements that complement the aesthetic and functional goals of your project. From elegant stonework and natural-looking water features, to sustainable materials and vibrant, native plant species, I ensure every choice enhances the beauty and longevity of your landscape. This step is where the project truly begins to feel alive, and my process helps to ensure a seamless and enjoyable experience for you.",
    },
    {
      title: "6. Construction",
      description:
        "The construction phase is where your dream landscape begins to take shape. Collaborating with top-tier contractors and craftsmen is vital to exceeding my own expectations. I work in the field, hands-on, strictly with contractors I trust, to personally oversee every aspect of the build process with meticulous attention to detail, right down to the finishing touches. I provide consistent, clear communication with everyone involved to ensure that the design is executed flawlessly. My commitment to excellence guarantees that the final result exceeds your expectations and stands as a testament to our shared vision.",
    },
    {
      title: "7. Completion!",
      description:
        "Time to wrap up! As your project reaches completion, I conduct a thorough walkthrough to ensure every element is executed to perfection. This final step includes a detailed review of your new outdoor space, as well as guidance on usage, maintenance and care to preserve its beauty and longevity. Our relationship doesn’t end here...my passion for my work means I will be always available to provide support and advice as your landscape matures and flourishes over time. I take great pride in delivering a finished product that not only meets but exceeds your expectations, ensuring your outdoor space is a source of joy and inspiration for years to come.",
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
