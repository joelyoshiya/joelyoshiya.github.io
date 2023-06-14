// using tailwind, a carousel of project cards are displayed via this component

import React from "react";
import ProjectCard from "./project";

const ProjectCarousel = () => {
  return (
    <div className="snap-x">
      <ProjectCard
        projectName="Project 1"
        projectDescription="This is a project"
        projectLink="https://www.google.com"
        projectGithubLink="https://www.github.com"
        projectTechStack="React, Tailwind, Gatsby"
      />
      <ProjectCard
        projectName="Project 2"
        projectDescription="This is a project"
        projectLink="https://www.google.com"
        projectGithubLink="https://www.github.com"
        projectTechStack="React, Tailwind, Gatsby"
      />
      <ProjectCard
        projectName="Project 3"
        projectDescription="This is a project"
        projectLink="https://www.google.com"
        projectGithubLink="https://www.github.com"
        projectTechStack="React, Tailwind, Gatsby"
      />
    </div>
  );
};

export default ProjectCarousel;
