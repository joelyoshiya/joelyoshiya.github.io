// exports a project component, which is a single card accepting:
// the following props: project name, project description, project image, project link, project github link, and tech stack

// I want the card to have a drop-shadow-xl, rounded-lg, and a max-width of 2xl

import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="m-auto flex max-w-2xl flex-col items-center justify-center rounded-lg bg-white p-5 shadow-xl dark:bg-gray-800">
      <h2 className="text-2xl font-bold">{props.projectName}</h2>
      <p className="text-lg">{props.projectDescription}</p>
      <a href={props.projectLink} className="text-blue-500 hover:text-blue-700">
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
  );
};

export default ProjectCard;
