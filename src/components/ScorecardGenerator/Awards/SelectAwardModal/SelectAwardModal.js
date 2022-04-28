import { useState } from "react"
import { Container, Row, Col, Modal, Card, Button } from "react-bootstrap"
import { AwardCard } from "../AwardCard/AwardCard"

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
                                    <AwardCard awardObj={element}/>
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