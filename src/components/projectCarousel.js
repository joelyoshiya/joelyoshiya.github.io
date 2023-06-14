// using tailwind, a carousel of project cards are displayed via this component

import React from "react";
import ProjectCard from "./project";

const ProjectCarousel = () => {
  return (
    <div className="scroll-smooth">
      <div className="flex snap-x space-x-4 overflow-x-auto">
        <div className="snap-center">
          <ProjectCard
            projectName="Project 1"
            projectDescription="This is a project"
            projectLink="https://www.google.com"
            projectGithubLink="https://www.github.com"
            projectTechStack="React, Tailwind, Gatsby"
          />
        </div>
        <div className="snap-center">
          <ProjectCard
            projectName="Project 2"
            projectDescription="This is a project"
            projectLink="https://www.google.com"
            projectGithubLink="https://www.github.com"
            projectTechStack="React, Tailwind, Gatsby"
          />
        </div>
        <div className="snap-center">
          <ProjectCard
            projectName="Project 3"
            projectDescription="This is a project"
            projectLink="https://www.google.com"
            projectGithubLink="https://www.github.com"
            projectTechStack="React, Tailwind, Gatsby"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
