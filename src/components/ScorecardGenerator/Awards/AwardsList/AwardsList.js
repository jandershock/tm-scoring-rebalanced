import { useEffect, useState } from "react"
import { CardGroup, Card, Col, Container, Row } from "react-bootstrap"
import { getAllAwards } from "../../../../modules/MilestonesAwardsManager"
import { AddAwardCard } from "../AddAwardCard/AddAwardCard"

export const AwardsList = () => {
    // Boolean to check for whether or not we have loaded awards from db
    const [awardsLoaded, setAwardsLoaded] = useState(false);

    // Card array for our selected Awards
    const [cardArray, setCardArray] = useState([])

    // Array of Awards
    const [awardsArray, setAwardsArray] = useState([])


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
    useEffect(() => {
        setCardArray(Array(5).fill(<AddAwardCard awardsProp={awardsArray} />))
    }, [awardsLoaded])


    return (
        <>
            <Container className="mt-5">
                <Row>
                    <h1 className="text-center">Awards</h1>
                </Row>
                <Row xs="1" md="5">
                    {cardArray.map((card, index) => (
                        <Col key={index} className="px-1 setMinHeight">
                            <>{card}</>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}