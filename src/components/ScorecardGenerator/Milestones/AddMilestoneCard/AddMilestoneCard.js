import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { ReactComponent as Logo } from "../../../../images/add_symbol_blank_background.svg"
import { SelectMilestoneModal } from "../SelectMilestoneModal/SelectMilestoneModal"
import "./AddMilestoneCard.scss"

export const AddMilestoneCard = ({ cardArray, milestonesProp, modifyMilestonesList }) => {
    const [showModal, setShowModal] = useState(false);

    const onClick = () => {
        setShowModal(true);
    }

    return (
        <>
            <Card onClick={onClick} bg="light" className="hover-style h-100">
                <Card.Body className="customCardBody">
                    <p>Add Milestone Card</p>
                    <Logo></Logo>
                </Card.Body>
            </Card>
            {/* <SelectMilestoneModal {...propsForAddMilestoneCard } showModal={showModal} setShowModal={setShowModal} /> */}
            <SelectMilestoneModal cardArray={cardArray} milestonesProp={milestonesProp} modifyMilestonesList={modifyMilestonesList} showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}