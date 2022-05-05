import { getSynergyValuesByFirstId } from "../modules/SynergyValuesManager";

export const CalculateSynergyRating = (combinedArray) => {
    if (combinedArray.length !== 0){
        // Sort argument array of combined MilestonesAwards by their ids in ascending order
        combinedArray.sort((a, b) => a.id - b.id);

        return Promise.all(
            combinedArray.map(el => {
                return getSynergyValuesByFirstId(el.id);
            })
        )
            .then(response => {
                let synergyValuesArray = combinedArray.map((el, index) => {
                    let calculatedValue = 0;
                    for (let i = index+1; i < combinedArray.length; i++){
                        calculatedValue += response[index].find(el => el.secondId === combinedArray[i].id).synergyValue;
                    }
                    return calculatedValue;
                })
                let totalSynergy = synergyValuesArray.reduce( (previous, current) => {
                    return previous + current;
                })
                return totalSynergy;
            })
        
    } else {
        console.log('you got an empty array there partner')
        return Promise.resolve(0);
    }
}