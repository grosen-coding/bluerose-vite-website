import styled from "styled-components";

const StyledEmailAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .letter {
    display: inline-block;
    font-size: 2.5rem;
    font-family: "Lucida Handwriting", cursive;
    color: ${(props) => props.theme.colors.titleColor};
    animation: fadeIn 0.5s ease-in-out forwards;
    opacity: 0;
    font-weight: 100;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const EmailAnimation = () => {
  const email = "gary@bluerosedesign.ca";

  const letters = email.split("").map((letter, index) => (
    <span
      key={index}
      className="letter"
      style={{
        animationDelay: `${1.3 + index * 0.1}s`,
      }}
    >
      {letter}
    </span>
  ));

  return <StyledEmailAnimation>{letters}</StyledEmailAnimation>;
};

export default EmailAnimation;
