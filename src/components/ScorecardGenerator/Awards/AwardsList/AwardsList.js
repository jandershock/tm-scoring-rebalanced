import { useEffect, useState } from "react"
import { CardGroup, Card, Col, Container, Row } from "react-bootstrap"
import { getAllAwards } from "../../../../modules/MilestonesAwardsManager"
import { AddAwardCard } from "../AddAwardCard/AddAwardCard"
import { DisplayAwardCard } from "../DisplayAwardCard/DisplayAwardCard"

export const AwardsList = ({ setScorecardGeneratorAwards }) => {
    // Array of Awards
    const [awardsArray, setAwardsArray] = useState([])

    // Card array for our selected Awards
    const [cardArray, setCardArray] = useState([])

    // Arry of AddAwardCards
    const [addAwardCardArray, setAddAwardCardArray] = useState([])

    const modifyAwardsList = (newCardArray) => {
        setCardArray(newCardArray);
        setAddAwardCardArray(Array(5 - newCardArray.length).fill(<AddAwardCard awardsProp={awardsArray} cardArray={newCardArray} setCardArray={setCardArray} setAddAwardCardArray={setAddAwardCardArray}/>))
    }

    // Get all Awards from db
    useEffect(() => {
        const loadAwards = async () => {
            const awards = await getAllAwards()
            setAwardsArray(awards);
        }

        loadAwards()
            .catch(console.error);
    }, [])

    // Initialize cardArray to an array of five empty Award cards when Awards from db are loaded
    useEffect(() => {
        setAddAwardCardArray(Array(5).fill(<AddAwardCard awardsProp={awardsArray} cardArray={cardArray} setCardArray={setCardArray} setAddAwardCardArray={setAddAwardCardArray} />))
    }, [awardsArray])
    
    useEffect(() => {
        setScorecardGeneratorAwards(cardArray);
    }, [cardArray])


    return (
        <>
            <Container className="g-2">
                <Row xs="1" md="5">
                    {cardArray.map((card) => {
                        return (
                            <Col key={`${card.id}-selectedCard`} className="px-1 setMinHeight">
                                <DisplayAwardCard awardObj={card} cardArray={cardArray} modifyAwardsList={modifyAwardsList} />
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