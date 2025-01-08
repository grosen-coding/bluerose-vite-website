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
`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primaryBlue};
  animation: ${spin} 1.5s infinite ease-in-out;
`;

const VisuallyHidden = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const PageLoader = ({ active }) => {
  if (!active) return null; // Render nothing if the loader is not active
  return (
    <LoaderContainer aria-live="polite" aria-busy="true">
      <Ball />
      <VisuallyHidden>Loading...</VisuallyHidden>
    </LoaderContainer>
  );
};

export default PageLoader;
