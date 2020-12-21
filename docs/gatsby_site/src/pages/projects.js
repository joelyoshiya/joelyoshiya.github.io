import React from "react"
import Header from "../components/header"
// import { Link } from "gatsby"
import Container from "../components/container"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Project from "../components/project"



export default function Projects() {
    return (
        <Container>
            <Header headerText="My Projects"></Header>    
            <Navbar />
            <p>Here are some projects I've done</p>
            <Project project_id="Spotivibez"></Project>
            <Project project_id="Dialogflow Agent"></Project>
            <Project project_id="Movie Database Client"></Project>
            <Footer />
        </Container>
        )
  }