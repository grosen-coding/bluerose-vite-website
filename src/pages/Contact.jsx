import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PageLoader from "../components/Loader";
import EmailAnimation from "../components/EmailAnimation";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// Styled Components
const ContactContainer = styled(motion.section)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.colors.accentWhite};
  padding: 4rem 2rem 0;
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
    url("/waterfall-half-colour.jpeg") no-repeat center center/cover;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }

  p {
    font-size: 1.2rem;
    padding: 0 3rem;
    opacity: 0.9;
    text-align: left;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 1rem;
      padding: 10rem 0 0 0;
    }

    span {
      font-size: 1.8rem;
      display: block;
      padding-bottom: 1rem;
      color: ${(props) => props.theme.colors.titleColor};
      font-style: italic;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 100%;
    }

    input {
      height: 3.5rem;
    }

    input,
    textarea {
      color: ${(props) => props.theme.colors.accentWhite};
      width: 100%;
      padding: 0.8rem;
      margin-top: 0.5rem;
      border: none;
      border-radius: 2px;
      font-size: 1rem;
      background: #115173;
    }

    textarea {
      height: 150px;
      resize: none;

      &::placeholder {
        font-size: 1.1rem;
        font-family: "Poppins", sans-serif;
      }
    }

    button {
      margin-top: 1rem;
      padding: 0.8rem 4rem;
      background-color: ${(props) => props.theme.colors.primaryBlue};
      color: ${(props) => props.theme.colors.accentWhite};
      opacity: 0.8;
      border: none;
      border-radius: 5px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${(props) => props.theme.colors.accentGreen};
      }
    }
  }
`;
const ContactText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }

  h3 {
    font-size: 1.5rem;
  }
`;

const ContactForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Minimum loader duration

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with form submission logic
  };

  if (isLoading) {
    return <PageLoader active={isLoading} />;
  }

  return (
    <ContactContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      aria-labelledby="contact-section"
    >
      {/* <h3 id="contact-section" className="sr-only">
        Thornbury | Collingwood | Beaver Valley | Wasaga Beach | Owen Sound |
        Barrie | Muskoka | Georgian Bay | Blue Mountains | Meaford | Grey
        Highlands | Simcoe County
      </h3> */}

      <ContactText>
        <p>
          <span>Ready to get started?...</span> Reach out to me for inquiries,
          consultations, and service details. Allow me to help guide you through
          creating breathtaking, natural landscapes tailored to your vision.
          From initial design to project completion, I'm here to help every step
          of the way. Contact Blue Rose Design today to bring your dream
          landscapes to life!
        </p>
        <h3>
          <EmailAnimation />
        </h3>
      </ContactText>
      <ContactForm>
        <form
          onSubmit={handleSubmit}
          role="form"
          aria-labelledby="contact-form"
          aria-describedby="contact-description"
        >
          <span id="contact-description" className="sr-only">
            Fill out the form below to send us a message.
          </span>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City/Town"
            required
          />

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can I help?"
            required
          />

          <button type="submit" aria-label="Send your message">
            Send
          </button>
        </form>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
