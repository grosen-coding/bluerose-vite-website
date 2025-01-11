import { useState, useEffect } from "react";
import styled from "styled-components";
import PageLoader from "../components/Loader";

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/hand-sketch-half-colour-2.jpeg") no-repeat center center/cover;
  color: ${(props) => props.theme.colors.textGrey};
  width: 100%;
  padding: 0 0 0 10rem;
  gap: 2rem;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    padding: 14rem 1rem 0;
    margin: 0 auto;
  }
`;

const TextColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    opacity: 1;
    text-align: justify;
    text-shadow: 0 0 50px rgba(0, 0, 0, 1);

    &:first-of-type {
      padding-top: 5rem;

      @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        padding-top: 1rem;
      }
    }

    &:last-of-type {
      margin-bottom: 0;
      @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        margin-bottom: 1rem;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-top: 0;
    p {
      font-size: 0.9rem;
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 0 auto;
  }

  img {
    max-width: 100%;
    width: 450px;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.colors.titleColor};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
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
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [loading, minTimeElapsed]);

  return (
    <>
      <PageLoader active={loading} />
      {!loading && (
        <AboutContainer
          id="about-section"
          role="region"
          aria-labelledby="about-section"
          tabIndex="-1"
        >
          <TextColumn
            id="about-text"
            role="article"
            aria-labelledby="about-text"
          >
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
              At Blue Rose Design, my mission is simple: to transform visions
              into breathtaking realities. By blending functionality with
              natural beauty, I help clients create outdoor spaces that inspire
              joy, tranquility, and connection to the environment. From concept
              to completion, I am dedicated to delivering artistry, precision,
              and unparalleled care.
            </p>
          </TextColumn>
          <ImageColumn
            id="about-image"
            role="img"
            aria-labelledby="about-image"
          >
            <img
              src="https://picsum.photos/id/1005/600/400"
              alt="Professional headshot of Blue Rose Design founder"
            />
          </ImageColumn>
        </AboutContainer>
      )}
    </>
  );
};

export default About;
