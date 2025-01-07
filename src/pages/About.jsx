import Main from "../components/Main"; // Import the Main component
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.accentWhite};
  background-color: ${(props) => props.theme.colors.backgroundGreen};
  padding: 2rem;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 800px;
  }
`;

const About = () => {
  return (
    <Main>
      <AboutContainer>
        <p>
          Blue Rose Design is dedicated to creating elegant, nature-inspired
          landscapes. With a focus on creativity, precision, and sustainability,
          we bring your vision to life in harmony with the environment.
        </p>
      </AboutContainer>
    </Main>
  );
};

export default About;
