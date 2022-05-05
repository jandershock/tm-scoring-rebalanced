import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { getAllMilestones } from "../../../../modules/MilestonesAwardsManager"
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard"
import { DisplayMilestoneCard } from "../DisplayMilestoneCard/DisplayMilestoneCard"

export const MilestonesList = ({ setScorecardGeneratorMilestones }) => {
    // Need to wait until milestones are loaded before setting milestonesArray
    const [milestonesLoaded, setMilestonesLoaded] = useState(false);
    // Create an array for all possible Milestones
    const [milestonesArray, setMilestonesArray] = useState([]);
    // Create an array to store all selected Milestone cards
    const [cardArray, setCardArray] = useState([])
    // Create an array to store AddMilestoneCards
    const [emptyCardArray, setEmptyCardArray] = useState([])


    // Props needed to properly render an AddMilestoneCard component
    const [propsForAddMilestoneCard, setPropsForAddMilestoneCard] = useState({
        milestonesProp: milestonesArray,
        cardArray: cardArray,
        setCardArray: setCardArray
    })

    // Need to update props for AddMilestoneCard component whenever there are changes
    // to the milestonesArray, the main cardArray, the emptyCardArray, or if our fetch to the db 
    // returns and loads our data.
    useEffect(() => {
        const tmp = { ...propsForAddMilestoneCard };
        [tmp.milestonesProp, tmp.cardArray] = [milestonesArray, cardArray];
        setPropsForAddMilestoneCard(tmp);
        // Updates array of Milestones in ScorecardGenerator
        setScorecardGeneratorMilestones(cardArray);
    }, [milestonesArray, cardArray, milestonesLoaded])

    useEffect(() => {
        setEmptyCardArray(Array(5-cardArray.length).fill(<AddMilestoneCard milestonesProp={milestonesArray} cardArray={cardArray} setCardArray={setCardArray} />))
    }, [propsForAddMilestoneCard])


    // Get Milestones list from db and store in milestonesArray.
    // Set milestonesLoaded to true when done.
    useEffect(() => {
        getAllMilestones()
            .then(milestones => {
                // Set available milestones array
                setMilestonesArray(milestones);
                setMilestonesLoaded(true);
            })
    }, [])


    return (
        <>
            <Container className="py-2">
                <Row xs="1" md="5">
                    {cardArray.map((element) => {
                        return (
                            <Col key={`${element.id}-${new Date().getTime()}-card`} className="px-1 setMinHeight">
                                <DisplayMilestoneCard milestoneObj={element} cardArray={cardArray} setCardArray={setCardArray}/>
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
}