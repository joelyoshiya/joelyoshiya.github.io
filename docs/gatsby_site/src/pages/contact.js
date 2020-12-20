import React from "react"
import Header from "../components/header"
// import { Link } from "gatsby"
import Navbar from "../components/navbar"
import Container from "../components/container"

export default function Contact() {
  return (
    <Container>
      <div style={{ color: `teal` }}>
        <Header headerText="Contact Me" />
        <Navbar />
        <p>Email: jyfoster@wisc.edu</p>
        <p>For inquiries or resume requests please email me.</p>
      </div>
    </Container>
  )
}
