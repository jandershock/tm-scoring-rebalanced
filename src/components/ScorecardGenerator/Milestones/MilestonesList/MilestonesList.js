import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { getAllMilestones } from "../../../../modules/MilestonesAwardsManager"
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard"

export const MilestonesList = () => {
    // Need to wait until milestones are loaded before setting milestonesArray
    const [milestonesLoaded, setMilestonesLoaded] = useState(false);
    // Need to wait until we get loaded milestones into our state before intiliazing
    const [readyToInitialize, setReadyToInitialize] = useState(false);

    // Create an array for all available Milestones
    const [milestonesArray, setMilestonesArray] = useState([]);
    // Create an array to store all selected Milestone cards
    const [cardArray, setCardArray] = useState([])

    // Props needed to properly render an AddMilestoneCard component
    const [propsForAddMilestoneCard, setPropsForAddMilestoneCard] = useState({
        milestonesProp: milestonesArray,
        cardArray: cardArray
    })

    // Need to update props for AddMilestoneCard component whenever there are changes
    // to the milestonesArray or the main cardArray
    useEffect(() => {
        const tmp = { ...propsForAddMilestoneCard };
        [tmp.milestonesProp, tmp.cardArray] = [milestonesArray, cardArray];
        setPropsForAddMilestoneCard(tmp);
        if (milestonesLoaded){
            setReadyToInitialize(true);
        }
    }, [milestonesArray, cardArray, milestonesLoaded])


    // Initialize milestones array to an array of milestones objects
    useEffect(() => {
        getAllMilestones()
            .then(milestones => {
                // Set available milestones array
                setMilestonesArray(milestones);
                console.log("setmilestonesarray");
                console.log(milestonesArray);
                setMilestonesLoaded(true);
            })
    }, [])

    // Initializes the card array to five empty cards once the milestones are loaded
    useEffect(() => {
        console.log(milestonesArray)
        console.log("setcardarray")
        setCardArray(Array(5).fill(<AddMilestoneCard  { ...propsForAddMilestoneCard } />))
    }, [readyToInitialize])


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <h1 className="text-center">Milestones</h1>
                </Row>
                <Row xs="1" md="5">
                    {cardArray.map((element, index) => {
                        return (
                            <Col key={index} className="px-1 setMinHeight">
                                {element}
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}