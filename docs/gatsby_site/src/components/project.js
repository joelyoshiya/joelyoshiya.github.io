import React from "react"
import Card from 'react-bootstrap/Card'// import styles from "./project.module.css"

export default function Project(props) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.project_id}</Card.Title>
          <Card.Text>Description for card</Card.Text>
        </Card.Body>
    </Card>
  )
}
