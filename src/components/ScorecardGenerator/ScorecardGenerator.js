import { AwardsList } from "./Awards/AwardsList/AwardsList"
import { MilestonesList } from "./Milestones/MilestonesList/MilestonesList"

export const ScorecardGenerator = () => {

    return (
        <>
            <MilestonesList />
            <AwardsList />
        </>
    )
}