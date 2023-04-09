import React, { useState } from 'react';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrls: string[];
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseOverlay = () => {
    setSelectedImage('');
  };

  return (
    <div className="project" key={project.id}>
      <div className="project-images">
        {project.imageUrls.map((imageUrl) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt={project.title}
            className={selectedImage === imageUrl ? 'selected' : ''}
            onClick={() => handleImageClick(imageUrl)}
          />
        ))}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {selectedImage && (
        <div className="overlay" onClick={handleCloseOverlay}>
          <div className="overlay-content">
            <img src={selectedImage} alt={project.title} />
            <span className="close-btn">&times;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
