import React from "react"
import { Link } from "gatsby"
import Container from "./container"

export default function Navbar() {
  return (
    <Container>
      <Link to="/contact/">Contact</Link>
      <Link to="/">Landing</Link>
      <Link to="/projects">Projects</Link>
    </Container>
  )
}
