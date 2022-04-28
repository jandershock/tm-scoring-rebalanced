import { useState } from "react"
import { Card } from "react-bootstrap"
import { ReactComponent as Logo } from "../../../../images/add_symbol_blank_background.svg"
import { SelectMilestoneModal } from "../SelectMilestoneModal/SelectMilestoneModal"
import "./AddMilestoneCard.scss"

export const AddMilestoneCard = ({ milestonesProp }) => {
    const [showModal, setShowModal] = useState(false);

    const onClick = () => {
        setShowModal(true);
    }

    return (
        <>
            <Card onClick={onClick} bg="light" className="hover-style">
                <Card.Body className="text-center">
                    <p>Add Milestone Card</p>
                    <Logo></Logo>
                </Card.Body>
            </Card>
            <SelectMilestoneModal milestonesProp={milestonesProp} showModal={showModal} setShowModal={setShowModal}/>
        </>
    )
}