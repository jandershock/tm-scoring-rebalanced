import { useEffect, useState, forwardRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { getAllMilestones } from "../../../../modules/MilestonesAwardsManager"
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard"
import { DisplayMilestoneCard } from "../DisplayMilestoneCard/DisplayMilestoneCard"

export const MilestonesList = forwardRef( ({ setScorecardGeneratorMilestones }, ref) => {
    // Create an array for all possible Milestones
    const [milestonesArray, setMilestonesArray] = useState([]);
    // Create an array to store all selected Milestone cards
    const [cardArray, setCardArray] = useState([])
    // Create an array to store AddMilestoneCards
    const [emptyCardArray, setEmptyCardArray] = useState([])

    const modifyMilestonesList = (newCardArray) => {
        setCardArray(newCardArray);
        setEmptyCardArray(Array(5 - newCardArray.length).fill(<AddMilestoneCard milestonesProp={milestonesArray} cardArray={newCardArray} modifyMilestonesList={modifyMilestonesList} />))
    }

    // Need to update props for AddMilestoneCard component whenever there are changes
    // to the milestonesArray, the main cardArray, the emptyCardArray, or if our fetch to the db 
    // returns and loads our data.
    useEffect(() => {
        // Updates array of Milestones in ScorecardGenerator
        setScorecardGeneratorMilestones(cardArray);
    }, [cardArray])

    useEffect(() => {
        setEmptyCardArray(Array(5).fill(<AddMilestoneCard milestonesProp={milestonesArray} cardArray={cardArray} modifyMilestonesList={modifyMilestonesList} />))
    }, [milestonesArray])


    // Get Milestones list from db and store in milestonesArray.
    // Set milestonesLoaded to true when done.
    useEffect(() => {
        getAllMilestones()
            .then(milestones => {
                // Set available milestones array
                setMilestonesArray(milestones);
            })
    }, [])


    return (
        <>
            <Container className="g-2" ref={ref}>
                <Row xs="1" md="5">
                    {cardArray.map((element) => {
                        return (
                            <Col key={`${element.id}-card`} className="px-1 setMinHeight">
                                <DisplayMilestoneCard milestoneObj={element} cardArray={cardArray} modifyMilestonesList={modifyMilestonesList}/>
                            </Col>
                        )
                    })}
                    {emptyCardArray.map((element, index) => {
                        return (
                            <Col key={`${index}-${new Date().getTime()}-empty`} className="px-1 setMinHeight">
                                {element}
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
})