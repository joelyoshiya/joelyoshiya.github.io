import React from "react"
import Layout from "../components/layout.js"

export default function Home() {
  return (
    <Layout>
      {/* // <Container>
    //   <Header headerText="Landing"></Header>
    //   <Navbar /> */}
      <p>
        Hi! I'm Joel. I am a recent grad with degrees in Computer Sciences and Japanese. I'm looking for roles as 
        a software engineer. I'm just starting to learn what it means to code with the care of an artisan
        and the passion of an inventor, but I'm excited to keep diving in and getting my hands dirty!{" "}
      </p>
      <h2>Skills</h2>
      {/*Want to put some icons covering my skills here:*/}
      <ul>
        <li>Java</li>
        <li>Javascript (React, React Native, Node.js)</li>
        <li>Python</li>
        <li>C</li>
        <li>MySQL</li>
      </ul>
      <h2>Courses</h2>
      <ul>
        <li>Operating Systems</li>
        <li>Compiler Design</li>
        <li>User Interface Design</li>
        <li>Database Management Systems</li>
        <li>Algorithms</li>
        <li>Object Oriented Programming (Java)</li>
        <li>Data Structures (Java)</li>
        <li>Machine Organization and Programming</li>
        <li>Human Computer Interaction</li>
        <li>Data Science with Python</li>
      </ul>
      <br></br>

      {/* //   <Footer />
    // </Container> */}
    </Layout>
  )
}
