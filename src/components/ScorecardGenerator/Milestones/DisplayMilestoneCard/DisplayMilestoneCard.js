import { Card, CloseButton } from "react-bootstrap"
import "./DisplayMilestoneCard.scss"

export const DisplayMilestoneCard = ({ milestoneObj, cardArray, modifyMilestonesList }) => {

    const handleClose = () => {
        let tmp = [...cardArray];
        tmp.splice(tmp.indexOf(milestoneObj), 1);
        modifyMilestonesList(tmp)
    }

    return (
        <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <strong>{milestoneObj.name}</strong>
                <CloseButton onClick={handleClose} className="scale-50 align-self-start" />
            </Card.Header>
            <Card.Img className="p-3" src={`images/card_images${milestoneObj.img_path}`} />
            <Card.Body>
                <small>{milestoneObj.description}</small>
            </Card.Body>
        </Card>
    )
}