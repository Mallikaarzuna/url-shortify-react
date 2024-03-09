import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactPage = () => {
  const mapCenter = [13.017276, 77.686475]; // Specify the initial center of the map
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out to us if you have any questions or feedback.
            We'd love to hear from you!
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h4 style={{ textAlign: "left" }}>Our Details</h4>
          <p style={{ textAlign: "left" }}>
            <strong>Name:</strong> Mallikarjuna
            <br />
            <strong>Address:</strong> Ramamurthy Nagar, Bangalore - 560016
            <br />
            <strong>Email:</strong> malli3amara@gmail.com
            <br />
            <strong>Phone:</strong> +91 9986701193
            <br />
          </p>
        </Col>
        <Col md={6}>
          {/* You can add a map or any other specific details here */}
          <h4>Our Location</h4>
          <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ height: "300px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={mapCenter}>
              <Popup>Your Company Location</Popup>
            </Marker>
          </MapContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
