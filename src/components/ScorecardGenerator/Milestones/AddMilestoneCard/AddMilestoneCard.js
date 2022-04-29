import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { ReactComponent as Logo } from "../../../../images/add_symbol_blank_background.svg"
import { SelectMilestoneModal } from "../SelectMilestoneModal/SelectMilestoneModal"
import "./AddMilestoneCard.scss"

export const AddMilestoneCard = ({ cardArray, setCardArray, milestonesProp }) => {
    const [showModal, setShowModal] = useState(false);

    const propsForAddMilestoneCard = {
        cardArray: cardArray,
        milestonesProp: milestonesProp,
        setCardArray: setCardArray,
    }

    const onClick = () => {
        setShowModal(true);
    }

    return (
        <>
            <Card onClick={onClick} bg="light" className="hover-style">
                <Card.Body className="customCardBody">
                    <p>Add Milestone Card</p>
                    <Logo></Logo>
                </Card.Body>
            </Card>
            <SelectMilestoneModal {...propsForAddMilestoneCard } showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}