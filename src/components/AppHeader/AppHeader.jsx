import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import route from "../../routes/route.json";

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
