import { useState } from "react"
import { Card } from "react-bootstrap"
import { ReactComponent as Logo } from "../../../../images/add_symbol_blank_background.svg"
import { SelectAwardModal } from "../SelectAwardModal/SelectAwardModal"
import "./AddAwardCard.scss"

export const AddAwardCard = ({awardsProp, cardArray, setCardArray}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Card onClick={() => setShowModal(true)} bg="light" className="hover-style h-100 mb-0">
                <Card.Body className="text-center customCardBody">
                    <p>Add Award Card</p>
                    <Logo></Logo>
                </Card.Body>
            </Card>
            <SelectAwardModal awardsProp={awardsProp} cardArray={cardArray} setCardArray={setCardArray} showModal={showModal} setShowModal={setShowModal}></SelectAwardModal>
        </>
    )
}