import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IoCloseSharp, IoExpandOutline } from "react-icons/io5";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: ${(props) => props.theme.colors.backgroundWhite};
  border-radius: 8px;
  padding: 2rem;
  width: 80%;
  max-width: 900px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 8px;
    cursor: pointer;
  }

  .counter {
    position: absolute;
    top: 100px;
    right: -30px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.primaryBlue};
    font-weight: bold;
    background: rgba(255, 255, 255, 0.8);
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
  }

  .close-button {
    position: absolute;
    top: 40px;
    right: -30px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.accentWhite};
    font-size: 3rem;
    transition:
      transform 0.2s,
      color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.titleColor};
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  .fullscreen-icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryBlue};
    font-size: 2rem;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const FullscreenModalContainer = styled(ModalOverlay)`
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 8px;
    cursor: crosshair;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.accentWhite};
    font-size: 2.5rem;
    transition:
      transform 0.2s,
      color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.titleColor};
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

const ThumbnailSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  .thumbnail {
    cursor: pointer;
    max-height: 100px;
    object-fit: cover;
    border: 2px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 8px;
    transition: border-color 0.3s;

    &.active {
      border-color: ${(props) => props.theme.colors.primaryBlue};
    }
  }

  .nav-button {
    background: ${(props) => props.theme.colors.primaryBlue};
    color: ${(props) => props.theme.colors.accentWhite};
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background: ${(props) => props.theme.colors.accentGreen};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const Modal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(project.images[0]);
  const [isFullscreen, setFullscreen] = useState(false);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <ModalOverlay
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.id}`}
        aria-describedby={`modal-description-${project.id}`}
      >
        <ModalContent
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <IoCloseSharp className="close-button" onClick={onClose} />
          <div className="counter">
            {project.images.indexOf(currentImage) + 1}/{project.images.length}
          </div>
          <img
            src={currentImage}
            alt={`Project image for ${project.name}`}
            onClick={() => setFullscreen(true)}
          />
          <IoExpandOutline
            className="fullscreen-icon"
            onClick={() => setFullscreen(true)}
          />
          <ThumbnailSlider>
            <button
              className="nav-button"
              onClick={() => setThumbnailIndex(thumbnailIndex - 1)}
              disabled={thumbnailIndex === 0}
              aria-label="Previous Thumbnail"
            >
              {"<"}
            </button>
            {project.images
              .slice(thumbnailIndex, thumbnailIndex + 4)
              .map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={`Thumbnail for ${project.name}`}
                  className={`thumbnail ${image === currentImage ? "active" : ""}`}
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            <button
              className="nav-button"
              onClick={() => setThumbnailIndex(thumbnailIndex + 1)}
              disabled={thumbnailIndex + 4 >= project.images.length}
              aria-label="Next Thumbnail"
            >
              {">"}
            </button>
          </ThumbnailSlider>
        </ModalContent>
      </ModalOverlay>
      {isFullscreen && (
        <FullscreenModalContainer onClick={() => setFullscreen(false)}>
          <motion.img
            src={currentImage}
            alt="Fullscreen view"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
          <IoCloseSharp
            className="close-button"
            onClick={() => setFullscreen(false)}
          />
        </FullscreenModalContainer>
      )}
    </>
  );
};

Modal.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
