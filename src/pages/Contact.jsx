import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PageLoader from "../components/Loader";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// Styled Components
const ContactContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100%;
  color: ${(props) => props.theme.colors.accentWhite};
  text-align: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.backgroundGreen};

  p {
    font-size: 1.2rem;
    max-width: 70%;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;

    label {
      margin-top: 1rem;
      text-align: left;
      width: 100%;
      color: ${(props) => props.theme.colors.accentWhite};
    }

    input,
    textarea {
      width: 100%;
      padding: 0.8rem;
      margin-top: 0.5rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
    }

    textarea {
      height: 150px;
      resize: none;
    }

    button {
      margin-top: 1rem;
      padding: 0.8rem 2rem;
      background-color: ${(props) => props.theme.colors.primaryBlue};
      color: ${(props) => props.theme.colors.accentWhite};
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
      <p>
        Reach out to Blue Rose Design for inquiries, consultations, and service
        details. We’re here to help bring your dream landscapes to life!
      </p>
      <form
        onSubmit={handleSubmit}
        role="form"
        aria-labelledby="contact-form"
        aria-describedby="contact-description"
      >
        <span id="contact-description" className="sr-only">
          Fill out the form below to send us a message.
        </span>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
        />

        <button type="submit" aria-label="Send your message">
          Send
        </button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
