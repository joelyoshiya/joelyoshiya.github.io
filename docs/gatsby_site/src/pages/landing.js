import React from "react"
import Header from "../components/header"
// import { Link } from "gatsby"
import Container from "../components/container"
import Navbar from "../components/navbar"



export default function Landing() {
    return (
        <Container>
            <Header headerText="Landing"></Header>    
            <Navbar />
            <p>Hi! I'm Joel and here is a little about me.</p>
        </Container>
        )
  }