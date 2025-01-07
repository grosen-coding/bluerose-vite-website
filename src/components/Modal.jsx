import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";

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
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryBlue};
    font-size: 2rem;
  }
`;

const ThumbnailSlider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  position: relative;

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
    transition: background 0.3s;

    &:hover {
      background: ${(props) => props.theme.colors.accentGreen};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const FullscreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.accentWhite};
    font-size: 2rem;
  }
`;

const Modal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(project.images[0]);
  const [isFullscreen, setFullscreen] = useState(false);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  const showPrevThumbnail = () => {
    if (thumbnailIndex > 0) {
      setThumbnailIndex(thumbnailIndex - 1);
    }
  };

  const showNextThumbnail = () => {
    if (thumbnailIndex + 4 < project.images.length) {
      setThumbnailIndex(thumbnailIndex + 1);
    }
  };

  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <IoCloseSharp className="close-button" onClick={onClose} />
          <img
            src={currentImage}
            alt={`Project ${project.id}`}
            onClick={() => setFullscreen(true)}
          />
          <ThumbnailSlider>
            <button
              className="nav-button"
              onClick={showPrevThumbnail}
              disabled={thumbnailIndex === 0}
            >
              {"<"}
            </button>
            {project.images
              .slice(thumbnailIndex, thumbnailIndex + 4)
              .map((image) => (
                <img
                  key={image}
                  src={image}
                  alt="Thumbnail"
                  className={`thumbnail ${
                    image === currentImage ? "active" : ""
                  }`}
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            <button
              className="nav-button"
              onClick={showNextThumbnail}
              disabled={thumbnailIndex + 4 >= project.images.length}
            >
              {">"}
            </button>
          </ThumbnailSlider>
        </ModalContent>
      </ModalOverlay>
      {isFullscreen && (
        <FullscreenImage onClick={() => setFullscreen(false)}>
          <img src={currentImage} alt="Full Screen View" />
          <IoCloseSharp
            className="close-button"
            onClick={() => setFullscreen(false)}
          />
        </FullscreenImage>
      )}
    </>
  );
};

Modal.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
