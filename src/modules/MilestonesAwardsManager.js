export const getAllMilestones = () => {
    return fetch("http://localhost:8088/milestones_awards?type=milestone")
        .then(response => response.json())
}