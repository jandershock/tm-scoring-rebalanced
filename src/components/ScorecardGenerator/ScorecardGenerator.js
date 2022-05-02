import { Col, Container, Row, Button } from "react-bootstrap"
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
                <Row className="justify-content-end mt-5">
                    <Col md="2">
                        <Button className="w-100" disabled variant="success" type="button">Save</Button>
                    </Col>
                    <Col md="2">
                        <Button className="w-100" disabled variant="primary" type="button">Print</Button>
                    </Col>
                </Row>
            </Container>
            <br/>
            <hr/>
            <br/>
        </>
    )
}