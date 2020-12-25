import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
// import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Container from "../components/container"
import Card from "react-bootstrap/esm/Card"

export default function Contact() {
  return (
    <Container>
        <Header headerText="Contact Me" />
        <Navbar />
        <p>Email: <a href="mailto:jyfoster@wisc.edu">jyfoster@wisc.edu</a></p>
        <p>For inquiries or resume requests please email me.</p>
        <Footer />
    </Container>
  )
}
