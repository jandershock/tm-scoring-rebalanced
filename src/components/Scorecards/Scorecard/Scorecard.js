import { useEffect, useState } from "react"
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap"
import { getMilestoneAwardById } from "../../../modules/MilestonesAwardsManager"

export const Scorecard = ({ scorecardObj }) => {
    const [milestones, setMilestones] = useState([])
    const [awards, setAwards] = useState([])

    useEffect(() => {
        Promise.all([
            Promise.all([
                getMilestoneAwardById(scorecardObj.milestoneOne),
                getMilestoneAwardById(scorecardObj.milestoneTwo),
                getMilestoneAwardById(scorecardObj.milestoneThree),
                getMilestoneAwardById(scorecardObj.milestoneFour),
                getMilestoneAwardById(scorecardObj.milestoneFive),
            ]),
            Promise.all([
                getMilestoneAwardById(scorecardObj.awardOne),
                getMilestoneAwardById(scorecardObj.awardTwo),
                getMilestoneAwardById(scorecardObj.awardThree),
                getMilestoneAwardById(scorecardObj.awardFour),
                getMilestoneAwardById(scorecardObj.awardFive)
            ])
        ])
            .then(response => {
                console.log(response);
                setMilestones(response[0].flat());
                setAwards(response[1].flat());
            })
    }, [])

    return (
        <>
            <Card>
                <Card.Header>
                    Title Goes Here
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Row md="5">
                            {/* Milestone Images */}
                            {milestones.map(milestoneObj => {
                                return (
                                    <Col key={milestoneObj.id}>
                                        <Card.Img src={`images/card_images${milestoneObj.img_path}`} />
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row>
                            {/* Award Images */}
                            {awards.map(awardObj => {
                                return (
                                    <Col key={awardObj.id}>
                                        <Card.Img src={`images/card_images${awardObj.img_path}`} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}