import { Navigate, Routes, Route } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ScorecardGenerator } from "./ScorecardGenerator/ScorecardGenerator";

export const ApplicationViews = ({ setAuthUser }) => {
    // const PrivateRoute = ({ children }) => {
    //     return isAuthenticated ? children : <Navigate to="/login" />;
    // }

    return (
        <>
            <Routes>
                {/* <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} /> */}

                <Route exact path="/" element={<ScorecardGenerator />} />
                <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route path="/register" element={<Register setAuthUser={setAuthUser} />} />

            </Routes>
        </>
    )
}