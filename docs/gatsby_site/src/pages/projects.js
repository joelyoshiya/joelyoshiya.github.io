import React from "react"
import Project from "../components/project"
import Layout from "../components/layout"
import {projects} from "../components/project.module.css"

export default function Projects() {
  return (
    <Layout>
      <h2>Projects</h2>
      <div className={projects}>
        <Project project_id="Project 1">project description</Project>
        <Project project_id="Project 2">project description</Project>
        <Project project_id="Project 3">project description</Project>
      </div>
    </Layout>
  )
}
