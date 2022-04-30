import { Card, CloseButton, Button } from "react-bootstrap"
import "./DisplayMilestoneCard.scss"

export const DisplayMilestoneCard = ({ milestoneObj }) => {

    return (
        <Card className="displayMilestoneCard mb-3">
            <Card.Header className="d-flex justify-content-between modifyPadding">
                <strong>{milestoneObj.name}</strong>
                <div className="d-flex">
                    <CloseButton className="scale-50" />
                </div>
            </Card.Header>
            <Card.Img className="p-3" src={`images/card_images${milestoneObj.img_path}`} />
            <Card.Body>
                Description goes here . . .
            </Card.Body>
        </Card>
    )
}