import { remoteURL } from "../settings"

export const getAllMilestones = () => {
    return fetch(`${remoteURL}/milestones_awards?type=milestone`)
        .then(response => response.json())
}

export const getAllAwards = () => {
    return fetch(`${remoteURL}/milestones_awards?type=award`)
        .then(response => response.json())
}

export const getMilestoneAwardById = (id) => {
    return fetch(`${remoteURL}/milestones_awards?id=${id}`)
        .then(response => response.json())
}