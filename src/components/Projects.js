import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants/data';

const Projects = () => {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Here are some of my recent projects showcasing my backend development and full-stack skills
          </span>
        </h2>

        <div className="projects__content">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
