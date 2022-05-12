import { forwardRef, useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

import "./PrintableScorecard.scss"

export const PrintableScorecard = forwardRef(({ milestonesArray, awardsArray }, ref) => {
    const [milestones, setMilestones] = useState(milestonesArray);
    const [awards, setAwards] = useState(awardsArray);

    useEffect(() => {
        setMilestones(milestonesArray);
        setAwards(awardsArray);
    }, [milestonesArray, awardsArray])

    return (
        <>
            <Container ref={ref}>
                {/* <br></br> */}
                <hr className="custom_hr"></hr>
                <Row className="w-100">
                    {milestones.map(el => {
                        return (
                            <Col key={el.id}>
                                <Card.Img src={`images/card_images${el.img_path}`} />
                            </Col>
                        )
                    })}
                </Row>
                <hr className="custom_hr"></hr>
                <Row className="w-100">
                    {awards.map(el => {
                        return (
                            <Col key={el.id}>
                                <Card.Img src={`images/card_images${el.img_path}`} />
                            </Col>
                        )
                    })}
                </Row>
                <hr className="custom_hr"></hr>
                
                <br/>
                
                <Row>{<h2>Milestones</h2>}</Row>
                {milestones.map(element => {
                    return (
                        <Row className="w-100">
                            <p>{element.name}: {element.description}</p>
                        </Row>
                    )
                })}

                <br/>

                <Row>{<h2>Awards</h2>}</Row>
                {awards.map(element => {
                    return (
                        <Row className="w-100">
                            <p>{element.name}: {element.description}</p>
                        </Row>
                    )
                })}
            </Container>
        </>
    )
})