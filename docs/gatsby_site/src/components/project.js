import React from "react"
import Card from 'react-bootstrap/Card'
import { projects, card } from "./project.module.css"

export default function Project({ project_id, children }) {
  return (
    <div className={projects}>
      <Card className={card}>
        <Card.Body>
          <Card.Title>{project_id}</Card.Title>
          <Card.Text>{children}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
