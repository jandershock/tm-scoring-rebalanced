import { Card, DropdownButton } from "react-bootstrap"
import { ReactComponent as Logo } from "../../../../images/add_symbol_blank_background.svg"
import "./AddMilestoneCard.scss"

export const AddMilestoneCard = () => {


    return (
        <>
            <Card >
                <Card.Header>Add Milestone Card!</Card.Header>
                <Card.Img className="crazy p-4" src="/images/add_symbol_blank_background.svg" />
                <DropdownButton>hey</DropdownButton>
                <Logo></Logo>
            </Card>
        </>
    )
}