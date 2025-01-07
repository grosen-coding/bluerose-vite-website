import Main from "../components/Main";
import styled from "styled-components";

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100%; */
  /* padding: 2rem; */

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .services-wrapper {
    display: flex;
    justify-content: center;
    gap: 2rem;
    /* margin-top: 2rem; */

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .service-card {
    background-color: ${(props) => props.theme.colors.backgroundWhite};
    border: 1px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 8px;
    padding: 1.5rem;
    width: 40%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }

    h3 {
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.primaryBlue};
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
    }

    p {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.textGrey};
      line-height: 1.6;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`;

const Services = () => {
  return (
    <Main>
      <ServicesContainer aria-labelledby="services-heading">
        <div className="services-wrapper">
          <div className="service-card">
            <h3>Landscape Design</h3>
            <p>
              At Blue Rose Design, we are passionate about creating custom and
              unique landscape designs inspired by our deep love of nature. Our
              7-step design process ensures accuracy, detail, and a seamless
              experience for our clients. We specialize in incorporating natural
              elements like waterfalls and stonework to bring a timeless beauty
              to your outdoor space. Every design is crafted with precision,
              artistry, and a commitment to sustainability.
            </p>
          </div>
          <div className="service-card">
            <h3>Project Management</h3>
            <p>
              Adding value to our designs, we offer comprehensive project
              management to bring every aspect of our vision to life. By working
              with top-tier contractors, we ensure that every detail of your
              project is executed with precision and to the highest standards.
              From planning to completion, we meticulously oversee each phase to
              ensure your project aligns with the Blue Rose Design philosophy of
              excellence and attention to detail.
            </p>
          </div>
        </div>
      </ServicesContainer>
    </Main>
  );
};

export default Services;
