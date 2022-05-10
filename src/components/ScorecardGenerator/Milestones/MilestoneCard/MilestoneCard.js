import { useState } from "react"
import { Card } from "react-bootstrap";

export const MilestoneCard = ({ addToSelectedCards, removeFromSelectedCards, isInCardArray, milestoneObj }) => {
    const [isSelected, setIsSelected] = useState(false || isInCardArray);

    const handleClickMilestone = () => {
        if (isSelected){
            removeFromSelectedCards(milestoneObj)
            setIsSelected(!isSelected)
        } else {
            if (addToSelectedCards(milestoneObj)) {
                setIsSelected(!isSelected)
            } else {
                console.log("Five cards already selected")
            }
        }
    }

    return (
        <Card onClick={handleClickMilestone} className={`h-100 hover-style-thick ${isSelected ? 'selected-card' : ''}`}>
            <Card.Header>
                <strong>{milestoneObj.name}</strong>
            </Card.Header>
            <Card.Img className="p-3" src={`images/card_images${milestoneObj.img_path}`} />
            <Card.Body>
                <small>{milestoneObj.description}</small>
            </Card.Body>
        </Card>
    )
}