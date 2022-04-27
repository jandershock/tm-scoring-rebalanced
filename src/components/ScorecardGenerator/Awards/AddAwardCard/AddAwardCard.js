import { Card } from "react-bootstrap"
import { ReactComponent as Logo } from "../../../../images/add_symbol_blank_background.svg"
import "./AddAwardCard.scss"

export const AddAwardCard = () => {


    return (
        <>
            <Card bg="gray" className="hover-style h-100">
                <Card.Body className="text-center">
                    <p>Add Award Card</p>
                    <Logo></Logo>
                </Card.Body>
            </Card>
        </>
    )
}