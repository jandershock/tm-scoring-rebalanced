import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap"
import { MilestoneCard } from "../MilestoneCard/MilestoneCard";

export const SelectMilestoneModal = ({ milestonesProp, showModal, setShowModal }) => {

    const [selectedCard, setSelectedCards] = useState([]);

    for (const el of milestonesProp){
        console.log(el.type);
    }

    return (
        <>
            <Modal scrollable size="lg" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Select Milestones</h4>
                        <h5>0/5</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row lg="4">
                            {milestonesProp.map(element => (
                                <Col sm="4">
                                    <MilestoneCard milestoneObj={element} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Update Milestones</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}