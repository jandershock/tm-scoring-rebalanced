import { Navigate, Routes, Route } from "react-router-dom";
import { ScorecardGenerator } from "./ScorecardGenerator/ScorecardGenerator";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                {/* <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} /> */}

                <Route path="/" element={<ScorecardGenerator/>} />
                
            </Routes>
        </>
    )
}