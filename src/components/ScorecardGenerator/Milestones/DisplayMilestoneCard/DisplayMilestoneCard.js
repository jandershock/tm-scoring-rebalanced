import { Card } from "react-bootstrap"

export const DisplayMilestoneCard = ({ milestoneObj }) => {

    return (
        <Card>
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