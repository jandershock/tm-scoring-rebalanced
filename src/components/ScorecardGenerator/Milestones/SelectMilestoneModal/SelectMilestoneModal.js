import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import { AddMilestoneCard } from "../AddMilestoneCard/AddMilestoneCard";
import { MilestoneCard } from "../MilestoneCard/MilestoneCard";

export const SelectMilestoneModal = ({ cardArray, setCardArray, milestonesProp, showModal, setShowModal }) => {

    const [selectedCards, setSelectedCards] = useState(cardArray);

    const addToSelectedCards = (obj) => {
        if (selectedCards.length < 5){
            const tmp = [...selectedCards];
            tmp.push(obj);
            setSelectedCards(tmp);
            return true;
        } else {
            return false;
        }
    }

    const removeFromSelectedCards = (obj) => {
        const tmp = [...selectedCards];
        const index = tmp.indexOf(obj)
        tmp.splice(index, 1);
        setSelectedCards(tmp);
    }

    const updateMilestones = () => {
        setCardArray(selectedCards)
        setShowModal(false);
    }

    return (
        <>
            <Modal scrollable size="lg" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Select Milestones</h4>
                        <h5>{selectedCards.length}/5</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row lg="4">
                            {milestonesProp.map(element => (
                                <Col sm="4">
                                    <MilestoneCard 
                                    isInCardArray={false} 
                                    milestoneObj={element}
                                    addToSelectedCards={addToSelectedCards}
                                    removeFromSelectedCards={removeFromSelectedCards} 
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={updateMilestones} variant="primary">Update Milestones</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}