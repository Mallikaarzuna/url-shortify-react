import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import route from "../../routes/route.json";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

const AppHeader = () => {
  const { isUserAuth, logoutHandler } = useContext(AuthContext);

  const { user } = useContext(UserContext);

  //created hook for naviagting to login page
  const navigate = useNavigate();

  const activeClasses = ({ isActive }) =>
    isActive
      ? "text-white text-decoration-none border border-2 p-2 border-white"
      : "text-white text-decoration-none";

  return (
    <header className="mb-3">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink
              className="text-white text-decoration-none"
              to={route.HOME}
            >
              URL Shortener App
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            {isUserAuth && (
              <Nav.Link>
                <NavLink className={activeClasses} to={route.LIST}>
                  URL List
                </NavLink>
              </Nav.Link>
            )}

            <Nav>
              <Nav.Link>
                <NavLink className={activeClasses} to={route.CONTACT}>
                  Contact Us
                </NavLink>
              </Nav.Link>
            </Nav>
          </Nav>
          <Nav>
            {!isUserAuth && (
              <Button variant="light" onClick={() => navigate(route.LOGIN)}>
                Login
              </Button>
            )}
            {isUserAuth && (
              <Button variant="primary" onClick={logoutHandler}>
                Logout
              </Button>
            )}
          </Nav>
          <Nav>
            <Button
              variant="primary"
              style={{ cursor: "default" }} //to remove hand icon
              className="ms-2"
            >
              <i className="bi bi-person-fill"></i>

              {/* <span className="ms-2">{user}</span> */}
              <span className="ms-2">{user ? user : "Guest"}</span>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
