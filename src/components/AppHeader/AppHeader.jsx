import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import route from "../../routes/route.json";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

const AppHeader = () => {
  const { isUserAuth, logoutHandler } = useContext(AuthContext);

  const { user } = useContext(UserContext);

  //created hook for naviagting to login page
  const navigate = useNavigate();

  return (
    <header className="mb-3">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to={route.HOME}> URL Shortener App</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={route.LOGIN}>Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={route.LIST}>URL List</Link>
            </Nav.Link>
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
              <span className="ms-2">{user}</span>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
