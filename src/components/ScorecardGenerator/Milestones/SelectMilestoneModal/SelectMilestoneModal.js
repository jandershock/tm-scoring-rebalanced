import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import { MilestoneCard } from "../MilestoneCard/MilestoneCard";

export const SelectMilestoneModal = ({ emptyCardArray, setEmptyCardArray, cardArray, setCardArray, milestonesProp, showModal, setShowModal }) => {

    console.log("EmptyCardArray: ", emptyCardArray);
    console.log("cardArray: ", cardArray);

    const updateMilestones = () => {

    }

    return (
        <>
            <Modal scrollable size="lg" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Select Milestones</h4>
                        <h5>{cardArray.length}/5</h5>
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