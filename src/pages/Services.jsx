import Main from "../components/Main";
import styled from "styled-components";

const ServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primaryBlue};
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .services-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const ServiceCard = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: all 0.3s ease-in-out;
  opacity: 0.9;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.9);
    opacity: 1;
    background-color: ${(props) => props.theme.colors.backgroundGreenLight};
  }

  h3 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.titleColor};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textGrey};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .learn-more {
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.accentGreen};
    text-decoration: none;
    border: 1px solid ${(props) => props.theme.colors.accentGreen};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition:
      background-color 0.3s ease-in-out,
      color 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.accentGreen};
      color: ${(props) => props.theme.colors.backgroundGreen};
    }
  }
`;

const Services = () => {
  return (
    <Main>
      <ServicesContainer aria-labelledby="services">
        <div className="services-wrapper">
          <ServiceCard>
            <h3>Landscape Design</h3>
            <p>
              Transform your outdoor space into a masterpiece with our custom
              landscape design services. We specialize in blending natural
              beauty with functional design, creating unique landscapes tailored
              to your vision. From waterfalls to natural stonework, every
              element is carefully planned to bring your dream to life.
            </p>
            <a href="/design-process" className="learn-more">
              Learn More
            </a>
          </ServiceCard>
          <ServiceCard>
            <h3>Project Management</h3>
            <p>
              Ensure every detail of your landscape design is brought to life
              with precision and excellence. Our project management services
              oversee every step, from concept to completion, working with
              top-tier contractors to execute designs to the highest standards.
            </p>
            <a href="/contact" className="learn-more">
              Get Started
            </a>
          </ServiceCard>
        </div>
      </ServicesContainer>
    </Main>
  );
};

export default Services;
