import { useState } from "react"
import { Container, Row, Col, Modal, Card, Button } from "react-bootstrap"
import { AddAwardCard } from "../AddAwardCard/AddAwardCard"
import { AwardCard } from "../AwardCard/AwardCard"

import "./SelectAwardModal.scss"


export const SelectAwardModal = ({ awardsProp, cardArray, setCardArray, setAddAwardCardArray, showModal, setShowModal }) => {
    // Cards which appear as selected in the modal
    const [selectedCards, setSelectedCards] = useState(cardArray);

    const handleCancel = () => {
        setSelectedCards(cardArray)
        setShowModal(false);
    }

    const handleUpdate = () => {
        setCardArray(selectedCards);
        setAddAwardCardArray(Array(5 - selectedCards.length).fill(<AddAwardCard awardsProp={awardsProp} cardArray={selectedCards} setCardArray={setCardArray} setAddAwardCardArray={setAddAwardCardArray}/>))
        setShowModal(false);
    }


    return (
        <>
            <Modal scrollable size="lg" show={showModal} onHide={handleCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Select Awards</h4>
                        <h5>{selectedCards.length}/5</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row lg="4" className="g-3">
                            {awardsProp.map((element, index) => (
                                <Col key={`${index}-awardModal`} sm="4" className="setMinHeightModalElements">
                                    <AwardCard 
                                        awardObj={element}
                                        isSelected={selectedCards.find(selectedCard => selectedCard === element)}
                                        selectedCards={selectedCards}
                                        setSelectedCards={setSelectedCards}
                                    /> 
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={handleUpdate}>Update Awards</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}