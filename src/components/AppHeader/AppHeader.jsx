import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import route from "../../routes/route.json";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

const AppHeader = () => {
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
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
