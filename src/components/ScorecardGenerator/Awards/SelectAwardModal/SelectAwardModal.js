import { Container, Row, Col, Modal, Card, Button } from "react-bootstrap"

import "./SelectAwardModal.scss"


export const SelectAwardModal = ({ awardsProp, showModal, setShowModal }) => {


    return (
        <>
            <Modal scrollable size="lg" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Select Awards</h4>
                        <h5>0/5</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row lg="4">
                            {awardsProp.map(element => (
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
                    <Button type="submit">Update Awards</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}