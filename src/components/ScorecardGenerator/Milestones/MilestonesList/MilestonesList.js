import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { getAllMilestones } from "../../../../modules/MilestonesAwardsManager"
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard"
import { DisplayMilestoneCard } from "../DisplayMilestoneCard/DisplayMilestoneCard"

export const MilestonesList = () => {
    // Need to wait until milestones are loaded before setting milestonesArray
    const [milestonesLoaded, setMilestonesLoaded] = useState(false);
    // Need to wait until we get loaded milestones into our state before intiliazing
    const [readyToInitialize, setReadyToInitialize] = useState(false);

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
        if (milestonesLoaded){
            setReadyToInitialize(true);
        }
    }, [milestonesArray, cardArray, milestonesLoaded])

    useEffect(() => {
        // setEmptyCardArray(Array(5-cardArray.length).fill(<AddMilestoneCard {...propsForAddMilestoneCard} />))
        
        // let tmp = []
        // for (let i = 0; i < 5-cardArray.length; i++){
        //     tmp.push(<AddMilestoneCard key={`${i}-addMilestoneCard`} milestonesProp={milestonesArray} cardArray={cardArray} setCardArray={setCardArray} />)
        // }
        // setEmptyCardArray(tmp)

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

    // // Initializes the card array to five empty cards once the milestones are loaded
    // useEffect(() => {
    //     console.log(milestonesArray)
    //     console.log("setcardarray")
    //     setEmptyCardArray(Array(5).fill(<AddMilestoneCard  { ...propsForAddMilestoneCard } />))
    // }, [readyToInitialize])


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <h1 className="text-center">Milestones</h1>
                </Row>
                <Row xs="1" md="5">
                    {cardArray.map((element, index) => {
                        return (
                            <Col key={`${index}-card`} className="px-1 setMinHeight">
                                <DisplayMilestoneCard className="displayMilestoneCard" milestoneObj={element} />
                            </Col>
                        )
                    })}
                    {emptyCardArray.map((element, index) => {
                        return (
                            <Col key={`${index}-empty`} className="px-1 setMinHeight">
                                {element}
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}