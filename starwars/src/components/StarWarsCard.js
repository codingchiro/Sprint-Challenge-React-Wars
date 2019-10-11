import React from "react"
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
} from "reactstrap"

const StarWarsCard = props => {
    return (
        <Card>
            <Row>
                <CardBody>
                    <CardTitle>{props.name} </CardTitle>

                    <CardSubtitle>Birthday: {props.birth}</CardSubtitle>

                    <CardText>
                        {props.name} has {props.hair} hair and {props.eye} eyes.
                    </CardText>
                </CardBody>
            </Row>
        </Card>
    )
}

export default StarWarsCard
