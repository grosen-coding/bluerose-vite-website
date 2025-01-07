import { useState, useEffect } from "react";
import Main from "../components/Main";
import styled from "styled-components";
import PageLoader from "../components/Loader";

const AboutContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.backgroundGreen};
  padding: 0 3rem;
  color: ${(props) => props.theme.colors.textGrey};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
  }
`;

const TextColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -3rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
    margin-bottom: 1.5rem;
    opacity: 0.8;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 100%;
    max-width: 450px;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.colors.titleColor};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-50%) translateX(20px);
  }
`;

const About = () => {
  const [loading, setLoading] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Start the minimum loader timer
    const timer = setTimeout(() => setMinTimeElapsed(true), 500);

    // Preload content (e.g., image)
    const preloadResources = async () => {
      const img = new Image();
      img.src = "https://picsum.photos/id/1005/600/400";
      await new Promise((resolve) => (img.onload = resolve));
    };

    // Wait for both preloading and minimum time
    preloadResources().then(() => {
      if (minTimeElapsed) setLoading(false);
    });

    return () => clearTimeout(timer); // Clean up timer
  }, [minTimeElapsed]);

  useEffect(() => {
    if (!loading && !minTimeElapsed) {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [loading, minTimeElapsed]);

  return (
    <Main>
      <PageLoader active={loading} />
      {!loading && (
        <AboutContainer>
          <TextColumn>
            <p>
              Designing and building high-end residential landscapes has been my
              passion since 2002. Growing up in Ontario’s picturesque Beaver
              Valley, I’ve always drawn inspiration from the natural beauty
              around me. From cascading waterfalls to tranquil streams, these
              elements have become central to my designs, allowing me to craft
              outdoor spaces that reflect the serenity of nature.
            </p>
            <p>
              My formal education in Architecture Technology at Mohawk College,
              combined with a background in Behaviour Psychology from McMaster
              University, provides a unique foundation for my work. These
              studies honed my technical precision while deepening my
              understanding of how outdoor spaces influence human emotion and
              behavior. Over the years, I’ve mastered tools like Dynascape,
              Sketchup, and Photoshop, merging traditional drafting techniques
              with cutting-edge 3D rendering to bring every design to life.
            </p>
            <p>
              Beyond landscaping, I’ve nurtured a love for web design since
              1997. After completing training at Juno College in 2021, I began
              creating dynamic, visually stunning websites, including this one.
              Whether crafting landscapes or coding a webpage, my unwavering
              attention to detail ensures every project is executed with
              excellence.
            </p>
            <p>
              At Blue Rose Design, my mission is simple: to transform visions
              into breathtaking realities. By blending functionality with
              natural beauty, I help clients create outdoor spaces that inspire
              joy, tranquility, and connection to the environment. From concept
              to completion, I am dedicated to delivering artistry, precision,
              and unparalleled care.
            </p>
          </TextColumn>
          <ImageColumn>
            <img
              src="https://picsum.photos/id/1005/600/400"
              alt="Professional headshot"
            />
          </ImageColumn>
        </AboutContainer>
      )}
    </Main>
  );
};

export default About;
