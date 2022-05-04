import { useEffect, useState } from "react"
import { Col, Container, Row, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { createScorecard } from "../../modules/ScorecardsManager"
import { AwardsList } from "./Awards/AwardsList/AwardsList"
import { MilestonesList } from "./Milestones/MilestonesList/MilestonesList"
import { SynergyRating } from "./SynergyRating/SynergyRating"

import "./ScorecardGenerator.scss"

export const ScorecardGenerator = ({ isAuthenticated }) => {
    let navigate = useNavigate()

    const [scorecardGeneratorMilestones, setScorecardGeneratorMilestones] = useState([]);
    const [scorecardGeneratorAwards, setScorecardGeneratorAwards] = useState([]);
    const [isScorecardReady, setIsScorecardReady] = useState(false);


    useEffect(() => {
        console.log("hello")
        console.log(isScorecardReady)
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

    return (
        <>
            <Container className="container-fluid">
                <Row className="mt-2">
                    <Col className="text-center">
                        <SynergyRating scorecardGeneratorMilestones={scorecardGeneratorMilestones} scorecardGeneratorAwards={scorecardGeneratorAwards} />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <MilestonesList setScorecardGeneratorMilestones={setScorecardGeneratorMilestones} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AwardsList setScorecardGeneratorAwards={setScorecardGeneratorAwards} />
                    </Col>
                </Row>
                <Row className="justify-content-end mt-5">
                    <Col md="2">
                        <Button className="w-100" disabled={!(isScorecardReady)} variant="success" type="button" onClick={handleSave}>Save</Button>
                    </Col>
                    <Col md="2">
                        {<Button className="w-100" disabled={!isScorecardReady} variant="primary" type="button">Print</Button>}
                    </Col>
                </Row>
            </Container>
            <br />
            <hr />
            <br />
        </>
    )
}