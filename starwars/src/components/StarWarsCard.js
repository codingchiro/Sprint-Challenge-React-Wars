import React from "react"
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap"

const StarWarsCard = props => {
    return (
        <Card className='card'>
            <CardBody className='main'>
                <CardTitle className='top'>{props.name} </CardTitle>
                <CardSubtitle>Birthday: {props.birth}</CardSubtitle>
                <CardText>
                    {props.name} has {props.hair} hair and {props.eye} eyes.
                </CardText>
            </CardBody>
        </Card>
    )
}

export default StarWarsCard
