import React from "react"
import Project from "../components/project"
import Layout from "../components/layout"

export default function Projects() {
  return (
    <Layout>
      <p>Here are some projects I've done.</p>
      <Project project_id="Spotivibez" />
      <Project project_id="Dialogflow Agent"></Project>
      <Project project_id="Movie Database Client"></Project>{" "}
    </Layout>
  )
}
