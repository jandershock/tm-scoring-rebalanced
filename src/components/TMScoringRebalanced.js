import { useState } from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavbarWrapper } from "./nav/NavbarWrapper"

export const TMScoringRebalanced = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("tm_ScoringRebalanced_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("tm_ScoringRebalanced_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("tm_ScoringRebalanced_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("tm_ScoringRebalanced_user") !== null)
    }

    return (
        <>
            <NavbarWrapper isAuthenticated={isAuthenticated} clearUser={clearUser} />
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
        </>
    )
}