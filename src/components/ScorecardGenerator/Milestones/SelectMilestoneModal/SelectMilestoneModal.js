import { Container, Row, Col, Modal, Card, Button } from "react-bootstrap"

export const SelectMilestoneModal = ({ milestonesProp, showModal, setShowModal }) => {
    // Load all milestones as state?
    console.log(milestonesProp);

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
                                    <Card className="mb-3 hover-style-thick">
                                        <Card.Header>
                                            <strong>{element.name}</strong>
                                        </Card.Header>
                                        <Card.Img className="p-3" src={`images/card_images${element.img_path}`} />
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
                    <Button variant="primary">Update Milestones</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}