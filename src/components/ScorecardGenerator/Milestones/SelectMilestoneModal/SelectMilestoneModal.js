import { Container, Row, Col, Modal, CloseButton, Card, Button } from "react-bootstrap"
import "./SelectMilestoneModal.scss"

export const SelectMilestoneModal = ({ milestonesProp, showModal, setShowModal }) => {
    // Load all milestones as state?
    console.log(milestonesProp);

    return (
        <>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
                {/* <CloseButton className="align-self-end p-3" onClick={() => { setShowModal(false) }}></CloseButton> */}
                <Modal.Header closeButton>
                    <Modal.Title>Select Milestones</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            {milestonesProp.map(element => (
                                <Col sm="4">
                                    <Card className="mb-3">
                                        <Card.Header>
                                            {element.name}
                                        </Card.Header>
                                        <Card.Body>
                                            Description goes here . . .
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Add Milestones</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}