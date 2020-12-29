import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Layout from "../components/layout.js"


export default function Blog() {
  return (
    <Container>
    <Header headerText="Blog"/>
    <Navbar />
    <p>Here is my blog on using github pages and Gatsby to build a porfolio site</p>
    <Footer />    
    </Container>
    
    )
}
