import { Card, CloseButton } from "react-bootstrap";

export const DisplayAwardCard = ({ awardObj, cardArray, setCardArray }) => {
    const handleClose = () => {
        let tmp = [...cardArray];
        tmp.splice(tmp.indexOf(awardObj), 1);
        console.log(tmp);
        setCardArray(tmp);
    }

    console.log("inside of displayawardcard")

    return (
        <Card className="mb-3">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <strong>{awardObj.name}</strong>
                <CloseButton onClick={handleClose} className="scale-50 align-self-start" />
            </Card.Header>
            <Card.Img className="p-3" src={`images/card_images${awardObj.img_path}`} />
            <Card.Body>
                Description goes here . . .
            </Card.Body>
        </Card>
    )
}