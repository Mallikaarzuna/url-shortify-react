import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="6" className="text-center">
          <h1 className="mt-3 text-danger">Error: 404 Not Found!!!</h1>
          <h4 className="mt-3 text-warning">
            The requested page could not be found on the server.
          </h4>
          <Link to="/">
            <Button variant="primary">Go to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
