import { useEffect, useState } from "react"
import { CardGroup, Card, Col, Container, Row } from "react-bootstrap"
import { getAllAwards } from "../../../../modules/MilestonesAwardsManager"
import { AddAwardCard } from "../AddAwardCard/AddAwardCard"
import { DisplayAwardCard } from "../DisplayAwardCard/DisplayAwardCard"

export const AwardsList = ({ setScorecardGeneratorAwards }) => {
    // Boolean to check for whether or not we have loaded awards from db
    const [awardsLoaded, setAwardsLoaded] = useState(false);

    // Array of Awards
    const [awardsArray, setAwardsArray] = useState([])

    // Card array for our selected Awards
    const [cardArray, setCardArray] = useState([])

    // Arry of AddAwardCards
    const [addAwardCardArray, setAddAwardCardArray] = useState([])


    // Get all Awards from db
    useEffect(() => {
        const loadAwards = async () => {
            const awards = await getAllAwards()
            console.log("Awards response: ", awards);
            setAwardsArray(awards);
            setAwardsLoaded(true); // Now we can initialize our cardArray
        }

        loadAwards()
            .catch(console.error);
        console.log("AwardsArray: ", awardsArray);
    }, [])

    // Initialize cardArray to an array of five empty Award cards when Awards from db are loaded
    // Fill empty card array with 5 minus selected card card
    useEffect(() => {
        setAddAwardCardArray(Array(5 - cardArray.length).fill(<AddAwardCard awardsProp={awardsArray} cardArray={cardArray} setCardArray={setCardArray} />))
        setScorecardGeneratorAwards(cardArray);
    }, [awardsArray, cardArray])


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <h1 className="text-center">Awards</h1>
                </Row>
                <Row xs="1" md="5">
                    {cardArray.map((card) => {
                        return (
                            <Col key={`${card.id}-selectedCard`} className="px-1 setMinHeight">
                                <DisplayAwardCard awardObj={card} cardArray={cardArray} setCardArray={setCardArray} />
                            </Col>
                        )
                    })}
                    {addAwardCardArray.map((card, index) => (
                        <Col key={`${index}-${new Date().getTime()}-addAwardCard`} className="px-1 setMinHeight">
                            <>{card}</>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}