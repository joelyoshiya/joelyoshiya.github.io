import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <Container>
      <Link className = {styles.link} to="/contact/">Contact</Link>
      <Link className = {styles.link} to="/">Landing</Link>
      <Link className = {styles.link} to="/projects">Projects</Link>
      <Link className = {styles.link} to="/blog">Blog</Link>
    </Container>
  )
}
