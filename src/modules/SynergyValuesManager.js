import { remoteURL } from "../settings"

export const getSynergyValuesByFirstId = (id) => {
    return fetch(`${remoteURL}/synergy_values?firstId=${id}`)
        .then(response => response.json())
}