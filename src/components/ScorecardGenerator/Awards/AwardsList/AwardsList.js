import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AddAwardCard } from "../AddAwardCard/AddAwardCard"

export const AwardsList = () => {
    // Initialize card array with five AddAwardCards
    const [cardArray, setCardArray] = useState(Array(5).fill(<AddAwardCard />))


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <h1 className="text-center">Awards</h1>
                </Row>
                <Row className="justify-content-between mt-2">
                    {cardArray.map((element, index) => {
                        return (
                            <Col key={index} md="2">
                                {element}
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}