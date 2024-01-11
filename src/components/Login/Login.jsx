import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import route from "../../routes/route.json";

// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Pass the entered credentials to the parent component
    onLogin({ username, password });
  };

  return (
    <Row className="justify-content-center">
      <Col md="6">
        <Form className="text-center">
          <Form.Group controlId="formBasicUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            className="me-3"
            variant="primary"
            type="button"
            onClick={handleLogin}
          >
            Login
          </Button>
          <NavLink>
            <Link to={route.SIGNUP}>Signup</Link>
          </NavLink>
        </Form>
      </Col>
    </Row>
  );
};
export default Login;
