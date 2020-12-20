import React from "react"
import Card from "react-bootstrap/Card"

// TODO import bootstrap-card

export default function Project(props) {
  return (
    <div>
      <Card>
        <Card.Title>{props.projTitle}</Card.Title>
        <Card.Description>Here is the card description</Card.Description>
      </Card>
    </div>
  )
}
