import { useState } from "react"
import { Card } from "react-bootstrap";
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard";

export const MilestoneCard = ({ isInCardArray, milestoneObj }) => {
    const [isSelected, setIsSelected] = useState(isInCardArray);

    const handleClickMilestone = () => {
        setIsSelected(!isSelected);
    }

    return (
        <Card onClick={handleClickMilestone} className={`mb-3 hover-style-thick ${isSelected ? 'selected-card' : ''}`}>
            <Card.Header>
                <strong>{milestoneObj.name}</strong>
            </Card.Header>
            <Card.Img className="p-3" src={`images/card_images${milestoneObj.img_path}`} />
            <Card.Body>
                Description goes here . . .
            </Card.Body>
        </Card>
    )
}