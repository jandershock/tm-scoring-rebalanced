import { Card } from "react-bootstrap"


export const AwardCard = ({ awardObj, isSelected, selectedCards, setSelectedCards }) => {
    const handleClickAward = () => {
        const tmp = [...selectedCards];
        
        // If already selected remove from selected array
        if (isSelected) {
            tmp.splice(tmp.indexOf(awardObj), 1);
        } 
        // If not selected add to selected array only if we don't have five awards
        else {
            if (selectedCards.length < 5) {
                tmp.push(awardObj);
            } else {
                console.log("Five Awards already selected.")
                return;
            }
        }
        setSelectedCards(tmp);
    }

return (
    <Card onClick={handleClickAward} className={`h-100 hover-style-thick ${isSelected ? `selected-card` : ''}`}>
        <Card.Header>
            <strong>{awardObj.name}</strong>
        </Card.Header>
        <Card.Img className="p-3" src={`images/card_images${awardObj.img_path}`} />
        <Card.Body>
            <small>{awardObj.description}</small>
        </Card.Body>
    </Card>
)
}
