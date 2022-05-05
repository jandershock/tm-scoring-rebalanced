import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { CalculateSynergyRating } from "../../../helpers/SynergyData"

export const SynergyRating = ({ scorecardGeneratorMilestones, scorecardGeneratorAwards }) => {
    const [synergyRating, setSynergyRating] = useState(0);

    useEffect(() => {
        CalculateSynergyRating([scorecardGeneratorAwards, scorecardGeneratorMilestones].flat())
            .then(setSynergyRating);
    }, [scorecardGeneratorMilestones, scorecardGeneratorAwards])

    return (
        <>
            <Card>
                <Card.Header>
                    <Card.Title className="text-center"><h2>Synergy Rating</h2></Card.Title>
                </Card.Header>
                <Card.Body>
                    <h3>{synergyRating}</h3>
                </Card.Body>
            </Card>
        </>
    )
}