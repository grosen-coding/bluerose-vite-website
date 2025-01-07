import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: scale(0); opacity: 1; }
  50% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(0); opacity: 0; }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};
  transition:
    opacity 0.5s ease,
    visibility 0.5s ease;
`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primaryBlue};
  animation: ${spin} 1.5s infinite ease-in-out;
`;

const PageLoader = ({ active }) => {
  return (
    <LoaderContainer $active={active}>
      <Ball />
    </LoaderContainer>
  );
};

export default PageLoader;
