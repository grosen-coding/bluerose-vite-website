import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import PageLoader from "../components/Loader"; // Loader component

const ShowcaseContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 100%;
  }

  .slider {
    position: relative;
    width: 100%;
    max-width: 1200px;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      width: 100%;
    }

    .slider-track {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    .project {
      flex: 0 0 33.33%;
      max-width: 33.33%;
      padding: 1rem;
      position: relative;
      overflow: hidden;
      background-color: ${(props) => props.theme.colors.lightGray};
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transform: scale(1);
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
        z-index: 10;
      }

      &:hover .project-title {
        transition: all 0.3s ease-in-out;
        color: ${(props) => props.theme.colors.titleColor};
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }

      .project-title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: ${(props) => props.theme.colors.accentWhite};
        text-align: center;
        padding: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }

  .slider-controls {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin-top: 1rem;

    button {
      background: ${(props) => props.theme.colors.primaryBlue};
      color: ${(props) => props.theme.colors.accentWhite};
      border: none;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease-in-out;

      &:hover {
        background: ${(props) => props.theme.colors.accentGreen};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;

const Showcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Project 1",
        images: [
          "https://picsum.photos/600/400?random=1",
          "https://picsum.photos/600/400?random=2",
          "https://picsum.photos/600/400?random=5",
          "https://picsum.photos/600/400?random=6",
          "https://picsum.photos/600/400?random=7",
          "https://picsum.photos/600/400?random=8",
          "https://picsum.photos/600/400?random=9",
        ],
      },
      {
        id: 2,
        title: "Project 2",
        images: [
          "https://picsum.photos/600/400?random=3",
          "https://picsum.photos/600/400?random=4",
          "https://picsum.photos/600/400?random=10",
          "https://picsum.photos/600/400?random=11",
          "https://picsum.photos/600/400?random=12",
          "https://picsum.photos/600/400?random=13",
          "https://picsum.photos/600/400?random=14",
        ],
      },
      {
        id: 3,
        title: "Project 3",
        images: [
          "https://picsum.photos/600/400?random=15",
          "https://picsum.photos/600/400?random=16",
          "https://picsum.photos/600/400?random=17",
          "https://picsum.photos/600/400?random=18",
          "https://picsum.photos/600/400?random=19",
          "https://picsum.photos/600/400?random=20",
          "https://picsum.photos/600/400?random=21",
        ],
      },
      {
        id: 4,
        title: "Project 4",
        images: [
          "https://picsum.photos/600/400?random=22",
          "https://picsum.photos/600/400?random=23",
          "https://picsum.photos/600/400?random=24",
          "https://picsum.photos/600/400?random=25",
          "https://picsum.photos/600/400?random=26",
          "https://picsum.photos/600/400?random=27",
          "https://picsum.photos/600/400?random=28",
        ],
      },
      {
        id: 5,
        title: "Project 5",
        images: [
          "https://picsum.photos/600/400?random=29",
          "https://picsum.photos/600/400?random=30",
          "https://picsum.photos/600/400?random=31",
          "https://picsum.photos/600/400?random=32",
          "https://picsum.photos/600/400?random=33",
          "https://picsum.photos/600/400?random=34",
          "https://picsum.photos/600/400?random=35",
        ],
      },
    ],
    []
  );

  useEffect(() => {
    const images = projects.flatMap((project) => project.images);
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setTimeout(() => setIsLoading(false), 500); // Minimum loader duration
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Handle failed image loads
    });

    return () => {
      // Cleanup (if necessary)
    };
  }, [projects]);

  if (isLoading) {
    return <PageLoader active={isLoading} />;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, projects.length - 3)
    );
  };

  return (
    <ShowcaseContainer role="region" aria-labelledby="showcase-section">
      <div className="slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.images[0]}
                alt={`Thumbnail for ${project.title}`}
              />
              <div className="project-title">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-controls">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous Project"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= projects.length - 3}
          aria-label="Next Project"
        >
          Next
        </button>
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </ShowcaseContainer>
  );
};

export default Showcase;
