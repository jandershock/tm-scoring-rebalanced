import { useEffect, useRef, useState } from "react"
import { Col, Container, Row, Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useReactToPrint } from "react-to-print";

import { createScorecard } from "../../modules/ScorecardsManager"
import { AwardsList } from "./Awards/AwardsList/AwardsList"
import { MilestonesList } from "./Milestones/MilestonesList/MilestonesList"
import { SynergyRating } from "./SynergyRating/SynergyRating"

import "./ScorecardGenerator.scss"
import { PrintableScorecard } from "./PrintableScorecard/PrintableScorecard";

export const ScorecardGenerator = ({ isAuthenticated }) => {
    let navigate = useNavigate();
    const componentRef = useRef();

    const [scorecardGeneratorMilestones, setScorecardGeneratorMilestones] = useState([]);
    const [scorecardGeneratorAwards, setScorecardGeneratorAwards] = useState([]);
    const [isScorecardReady, setIsScorecardReady] = useState(false);


    useEffect(() => {
        if (scorecardGeneratorMilestones.length === 5 && scorecardGeneratorAwards.length === 5) {
            setIsScorecardReady(true);
        } else {
            setIsScorecardReady(false);
        }
    }, [scorecardGeneratorMilestones, scorecardGeneratorAwards])

    const handleSave = () => {
        if (isAuthenticated) {
            let user = JSON.parse(sessionStorage.getItem("tm_ScoringRebalanced_user"));
            let scorecardObject = {
                userId: user.id,
                milestoneOne: scorecardGeneratorMilestones[0].id,
                milestoneTwo: scorecardGeneratorMilestones[1].id,
                milestoneThree: scorecardGeneratorMilestones[2].id,
                milestoneFour: scorecardGeneratorMilestones[3].id,
                milestoneFive: scorecardGeneratorMilestones[4].id,
                awardOne: scorecardGeneratorAwards[0].id,
                awardTwo: scorecardGeneratorAwards[1].id,
                awardThree: scorecardGeneratorAwards[2].id,
                awardFour: scorecardGeneratorAwards[3].id,
                awardFive: scorecardGeneratorAwards[4].id
            }
            createScorecard(scorecardObject)
                .then(() => navigate("/scorecards"))
        } else {
            // Register modal
            console.log("Please login");
        }
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            {isScorecardReady && <div style={{ display: "none"}}><PrintableScorecard ref={componentRef} milestonesArray={scorecardGeneratorMilestones} awardsArray={scorecardGeneratorAwards} /></div>}
            <Container className="container-fluid">
                <Row className="mt-5 justify-content-center">
                    <Col className="text-center" sm="6" md="4">
                        <SynergyRating scorecardGeneratorMilestones={scorecardGeneratorMilestones} scorecardGeneratorAwards={scorecardGeneratorAwards} />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title className="text-center"><h2>Milestones</h2></Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <MilestonesList setScorecardGeneratorMilestones={setScorecardGeneratorMilestones} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title className="text-center"><h2>Awards</h2></Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <AwardsList setScorecardGeneratorAwards={setScorecardGeneratorAwards} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-end mt-5">
                    <Col md="2">
                        <Button className="w-100" disabled={!(isScorecardReady)} variant="success" type="button" onClick={handleSave}>Save</Button>
                    </Col>
                    <Col md="2">
                        {<Button className="w-100" disabled={!isScorecardReady} variant="primary" type="button" onClick={handlePrint}>Print</Button>}
                    </Col>
                </Row>

            </Container>
            <br />
            <hr />
            <br />
        </>
    )
}