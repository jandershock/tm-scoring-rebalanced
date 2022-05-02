import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export const NavbarWrapper = ({ isAuthenticated, clearUser }) => {

    const displayLinks = (authBool) => {
        if (!authBool) {
            return (
                <>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/registers">Register</Nav.Link>
                </>
            )
        } else {
            return (
                <>
                    <Nav.Link as={Link} to="/scorecards">Saved Scorecards</Nav.Link>
                    <Nav.Link as={Link} to="/" onClick={clearUser}>Logout</Nav.Link>
                </>
            )
        }
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="px-3">Hello Mars!</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end px-3">
                {displayLinks(isAuthenticated)}
            </Navbar.Collapse>
        </Navbar>
    )
}