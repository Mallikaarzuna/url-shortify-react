import axios from "axios";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    // Perform signup validation here
    try {
      //Make an API call to the backend for user registration
      const response = await axios.post("http://localhost:3000/api/register", {
        firstName,
        lastName,
        username,
        password,
      });

      console.log(response.data); // Log the response from the server

      // You can handle success or navigate to another page on successful registration
      navigate("/login");
    } catch (error) {
      console.error("Error during user registration:", error.response.data);
      // Handle errors, e.g., show error messages to the user
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="6">
          <Form>
            <Row>
              <Col md="6">
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mt-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/* Two lines of space using Bootstrap's spacing utility class */}
            <Button
              className="mt-3"
              variant="primary"
              type="button"
              onClick={handleSignup}
            >
              Signup
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
