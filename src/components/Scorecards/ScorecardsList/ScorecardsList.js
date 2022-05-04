import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { getAllScorecardsByUserId } from "../../../modules/ScorecardsManager";
import { Scorecard } from "../Scorecard/Scorecard";

export const ScorecardsList = () => {
    const user = JSON.parse(sessionStorage.getItem("tm_ScoringRebalanced_user"));

    const [savedScorecards, setSavedScorecards] = useState([])

    useEffect(() => {
        getAllScorecardsByUserId(user.id)
            .then(setSavedScorecards)
    }, [])

    return (
        <>
            <h1 className="p-4 text-center">Hello {user.name}!</h1>
            <Container>
                <Row xs="1" sm="2" className="g-4">
                    {savedScorecards.map(scorecard => {
                        return (
                            <Col key={scorecard.id}>
                                <Scorecard scorecardObj={scorecard} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <br />
            <hr />
            <br />
        </>
    )
}