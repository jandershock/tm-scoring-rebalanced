import { useState } from "react"
import { Card } from "react-bootstrap";
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard";

export const MilestoneCard = ({ propsForAddMilestoneCard, selectedCards, setSelectedCards, milestoneObj }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClickMilestone = () => {
        if (isSelected) {
            const tmpArr = { ...selectedCards }
            const index = tmpArr.indexOf(el => el.id === milestoneObj.id)
            tmpArr[index] = <AddMilestoneCard { ...propsForAddMilestoneCard }/>
        }
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