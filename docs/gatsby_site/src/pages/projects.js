import React from "react"
import Project from "../components/project"
import Layout from "../components/layout"

export default function Projects() {
  return (
    <Layout>
      <h1>Projects</h1>
      <Project project_id="Project 1">project description</Project>
      <Project project_id="Project 2">project description</Project>
      <Project project_id="Project 3">project description</Project>
    </Layout>
  )
}
