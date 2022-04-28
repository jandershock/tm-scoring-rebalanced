import { Col, Container, Row } from "react-bootstrap"
import { AwardsList } from "./Awards/AwardsList/AwardsList"
import { MilestonesList } from "./Milestones/MilestonesList/MilestonesList"

import "./ScorecardGenerator.scss"

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