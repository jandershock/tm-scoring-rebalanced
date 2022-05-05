import { forwardRef, useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

export const PrintableScorecard = forwardRef( ({ milestonesArray, awardsArray }, ref) => {
    const [milestones, setMilestones] = useState(milestonesArray);
    const [awards, setAwards] = useState(awardsArray);

    useEffect(() => {
        setMilestones(milestonesArray);
        setAwards(awardsArray);
    }, [milestonesArray, awardsArray])

    return (
        <>
            <Container ref={ref}>
                <br></br>
                <Row className="w-100">
                    {milestones.map(el => {
                        return (
                            <Col key={el.id}>
                                <Card.Img src={`images/card_images${el.img_path}`} />
                            </Col>
                        )
                    })}
                </Row>
                <Row className="w-100">
                    {awards.map(el => {
                        return (
                            <Col key={el.id}>
                                <Card.Img src={`images/card_images${el.img_path}`} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
})