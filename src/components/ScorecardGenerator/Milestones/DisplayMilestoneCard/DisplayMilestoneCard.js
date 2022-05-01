import { useEffect, useState } from "react"
import { Card, CloseButton, Button } from "react-bootstrap"
import "./DisplayMilestoneCard.scss"

export const DisplayMilestoneCard = ({ milestoneObj, cardArray, setCardArray }) => {

    const handleClose = () => {
        let tmp = [...cardArray];
        tmp.splice(tmp.indexOf(milestoneObj), 1);
        console.log(tmp);
        setCardArray(tmp);
    }

    return (
        <Card className="displayMilestoneCard mb-3">
            {/* <Card.Header className="d-flex justify-content-between modifyPadding">
                    <strong className="ps-1">{milestoneObj.name}</strong>
                    <div className="d-flex justify-content-end align-self-center">
                        <CloseButton onClick={handleClose} className="scale-50 align-self-start" />
                    </div>
                </Card.Header> */}
            <Card.Header className="d-flex justify-content-between align-items-center">
                <strong>{milestoneObj.name}</strong>
                <CloseButton onClick={handleClose} className="scale-50 align-self-start" />
            </Card.Header>
            <Card.Img className="p-3" src={`images/card_images${milestoneObj.img_path}`} />
            <Card.Body>
                Description goes here . . .
            </Card.Body>
        </Card>
    )
}