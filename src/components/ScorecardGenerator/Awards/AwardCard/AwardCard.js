import { useState } from "react";
import { Card } from "react-bootstrap"


export const AwardCard = ({awardObj}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClickAward = () => {
        setIsSelected(!isSelected);
    }

    return (
        <Card onClick={handleClickAward} className={`mb-3 hover-style-thick ${isSelected ? `selected-card` : ''}`}>
            <Card.Header>
                <strong>{awardObj.name}</strong>
            </Card.Header>
            <Card.Img className="p-3" src={`images/card_images${awardObj.img_path}`} />
            <Card.Body>
                Description goes here . . .
            </Card.Body>
        </Card>
    )
}
