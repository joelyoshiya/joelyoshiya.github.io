import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { card, cardBody } from "./project.module.css"
import CardImg from "../images/iconmonstr-linkedin-3.svg"

export default function Project({ project_id, children }) {
  return (
      <Card className={card}>
        <Card.Body className={cardBody}>
          <Card.Img variant="top" src={CardImg}/>
          <Card.Title>{project_id}</Card.Title>
          <Card.Text>{children}</Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
  )
}
