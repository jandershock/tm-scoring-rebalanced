import { Card, CloseButton } from "react-bootstrap";

export const DisplayAwardCard = ({ awardObj, cardArray, setCardArray }) => {
    const handleClose = () => {
        let tmp = [...cardArray];
        tmp.splice(tmp.indexOf(awardObj), 1);
        setCardArray(tmp);
    }

    return (
        <Card className="h-100">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <strong>{awardObj.name}</strong>
                <CloseButton onClick={handleClose} className="scale-50 align-self-start" />
            </Card.Header>
            <Card.Img className="p-3" src={`images/card_images${awardObj.img_path}`} />
            <Card.Body>
                <small>{awardObj.description}</small>
            </Card.Body>
        </Card>
    )
}