import { remoteURL } from "../settings"

export const createScorecard = (scorecardObj) => {
    return fetch(`${remoteURL}/scorecards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(scorecardObj)
    })
        .then(response => response.json());
}

export const getAllScorecardsByUserId = (userId) => {
    return fetch(`${remoteURL}/scorecards?userId=${userId}`)
        .then(response => response.json())
}