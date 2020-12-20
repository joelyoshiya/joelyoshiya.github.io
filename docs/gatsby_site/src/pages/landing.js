import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"



export default function Landing() {
    return (
        <div>
            <Header headerText="Landing"></Header>    
            <p>Hi! I'm Joel and here is a little about me.</p>
            <Link to="/contact/">Contact</Link>
        </div>
        )
  }