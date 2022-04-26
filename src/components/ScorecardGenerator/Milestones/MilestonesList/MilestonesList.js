import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard"

export const MilestonesList = () => {
    // Initialize card array with five AddMilestoneCards
    const [cardArray, setCardArray] = useState(Array(5).fill(<AddMilestoneCard />))


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <h1 className="text-center">Milestones</h1>
                </Row>
                <Row className="justify-content-between mt-2">
                    {cardArray.map(element => {
                        return (
                            <Col md="2">
                                {element}
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}