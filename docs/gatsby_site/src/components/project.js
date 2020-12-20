import React from "react"
import Card from "react"

export default function Project(props) {
  return (
    <div>
      <Card>
        <Card.Title>{props.projTitle.toString()}</Card.Title>
        <Card.Description>Here is the card description</Card.Description>
      </Card>
    </div>
  )
}
