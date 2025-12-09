import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="projects__row">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="projects__row-img-cont"
      >
        <img
          src={image}
          alt={title}
          className="projects__row-img"
          loading="lazy"
        />
      </a>
      <div className="projects__row-content">
        <h3 className="projects__row-content-title">{title}</h3>
        <p className="projects__row-content-desc">{description}</p>
        <a href={link} className="btn btn--med btn--theme" target="_blank" rel="noopener noreferrer">
          View Live →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
