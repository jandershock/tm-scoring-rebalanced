import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { getAllMilestones } from "../../../../modules/MilestonesAwardsManager"
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard"

export const MilestonesList = () => {
    // Create an array of all Milestones
    const [milestonesArray, setMilestonesArray] = useState([]);

    // Initialize card array with five AddMilestoneCards
    const [cardArray, setCardArray] = useState(Array(5).fill(<AddMilestoneCard milestonesProp = {milestonesArray}/>))




    // Initialize milestones array to an array of milestones objects
    useEffect(() => {
        getAllMilestones()
            .then(milestones => {
                setMilestonesArray(milestones)
            })
    }, [])


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <h1 className="text-center">Milestones</h1>
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