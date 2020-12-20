import React from "react"
import Header from "../components/header"
// import { Link } from "gatsby"
import Container from "../components/container"
import Navbar from "../components/navbar"



export default function Projects() {
    return (
        <Container>
            <Header headerText="My Projects"></Header>    
            <Navbar />
            <p>Here are some projects I've done</p>
        </Container>
        )
  }