import React, { useEffect, useState } from "react"
import axios from "axios"
import StarWarsCard from "./StarWarsCard"
import { Container, Row } from "reactstrap"

export default function StarWarsList() {
    const [chars, setChars] = useState([])

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log("this is my data", response.data)
                setChars(response.data.results)
            })
            .catch(error => {
                console.log("No bueno!", error)
            })
    }, [])

    return (
        <Container>
            <Row>
                {chars.map(char => {
                    return (
                        <StarWarsCard
                            key={char.height}
                            name={char.name}
                            birth={char.birth_year}
                            gender={char.gender}
                            hair={char.hair_color}
                            eye={char.eye_color}
                        />
                    )
                })}
            </Row>
        </Container>
    )
}
