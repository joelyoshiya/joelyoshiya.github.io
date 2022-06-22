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
        a software engineer.{" "}  
        <span role="img" aria-labelledby="jsx-ally/accessible-emoji">
          🐸
        </span>
      </p>
      <h2>Skills</h2>
      <p>Want to put some icons covering my skills here:</p>
      <ul>
        <li>React</li>
        <li>Javascript</li>
        <li>Java</li>
        <li>Python</li>
        <li>MySQL</li>
        <li>C</li>
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
        <li>Data Science with Python</li>
      </ul>
      <br></br>

      {/* //   <Footer />
    // </Container> */}
    </Layout>
  )
}
