import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="Contact Me"/>
      <p>Such wow. Very React.</p>
      <Link to="/">Landing</Link>

    </div>
  )
}