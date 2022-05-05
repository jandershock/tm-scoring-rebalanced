import { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import { MilestoneCard } from "../MilestoneCard/MilestoneCard";

export const SelectMilestoneModal = ({ cardArray, setCardArray, milestonesProp, showModal, setShowModal }) => {

    const [selectedCards, setSelectedCards] = useState(cardArray);

    // useEffect(() => {
    //     setSelectedCards(cardArray);
    // }, [cardArray])

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
        setCardArray(selectedCards);
        setShowModal(false);
    }

    const handleCancel = () => {
        setSelectedCards(cardArray);
        setShowModal(false);
    }

    return (
        <>
            <Modal scrollable size="lg" show={showModal} onHide={handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Select Milestones</h4>
                        <h5>{selectedCards.length}/5</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row lg="4" className="g-3">
                            {milestonesProp.map((element) => (
                                <Col key={`${element.id}-selected?${cardArray.includes(element)}-milestoneCard`} sm="4">
                                    <MilestoneCard 
                                    isInCardArray={selectedCards.includes(element)} 
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