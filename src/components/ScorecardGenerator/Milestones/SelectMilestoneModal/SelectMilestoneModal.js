import { Container, Row, Col } from "react-bootstrap"

export const SelectMilestoneModal = ({ milestonesProp }) => {
    // Load all milestones as state?
    console.log(milestonesProp);

    return (
        <>
            <Container>
                {milestonesProp.map(element => {
                    <Row>
                        <p>{element.name}</p>
                    </Row>
                })}
            </Container>
        </>
    )
}