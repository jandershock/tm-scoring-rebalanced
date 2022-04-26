import { Col, Container, Row } from "react-bootstrap"
import { AwardsList } from "./Awards/AwardsList/AwardsList"
import { MilestonesList } from "./Milestones/MilestonesList/MilestonesList"

export const ScorecardGenerator = () => {

    return (
        <>
            <Container className="container-fluid">
                <Row>
                    <Col>
                        <MilestonesList />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AwardsList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}