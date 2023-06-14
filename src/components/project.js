// exports a project component, which is a single card accepting:
// the following props: project name, project description, project image, project link, project github link, and tech stack

import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="snap-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">{props.projectName}</h2>
        <p className="text-lg">{props.projectDescription}</p>
        <a
          href={props.projectLink}
          className="text-blue-500 hover:text-blue-700"
        >
          Link to Project
        </a>
        <a
          href={props.projectGithubLink}
          className="text-blue-500 hover:text-blue-700"
        >
          Link to Github
        </a>
        <p className="text-lg">{props.projectTechStack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
