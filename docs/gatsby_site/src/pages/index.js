import React from "react"
import Layout from "../components/layout.js"

export default function Home() {
  return (
    <Layout>
      {/* // <Container>
    //   <Header headerText="Landing"></Header>
    //   <Navbar /> */}
      <p>
        Hi! I'm Joel. Currently a 3rd year at UW-Madison studying Comp Sci and
        Japanese. I'm starting to get obsessed with web dev. Looking for an
        internship to dive into it! Also a runner, like various genres of music,
        etc. A change. A change again. Made a change. 
        <span role="img" aria-labelledby="jsx-ally/accessible-emoji">
          🐸
        </span>
      </p>
      <h2>Skills</h2>
      <p>Want to put some icons covering my skills here:</p>
      <ul>
        <li>React</li>
        <li>Javascript/Typescript</li>
        <li>Java</li>
        <li>MySQL</li>
      </ul>
      <h2>Courses</h2>
      <ul>
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
