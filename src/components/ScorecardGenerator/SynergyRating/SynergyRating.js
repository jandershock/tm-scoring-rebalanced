import { useEffect, useState } from "react";
import { CalculateSynergyRating } from "../../../helpers/SynergyData"

export const SynergyRating = ({ scorecardGeneratorMilestones, scorecardGeneratorAwards }) => {
    const [synergyRating, setSynergyRating] = useState(0);

    useEffect(() => {
        CalculateSynergyRating([scorecardGeneratorAwards, scorecardGeneratorMilestones].flat())
            .then(setSynergyRating);
    }, [scorecardGeneratorMilestones, scorecardGeneratorAwards])

    return (
        <>
            <h1 className="text-center">This is the Synergy Rating!</h1>
            <h2>{synergyRating}</h2>
        </>
    )
}