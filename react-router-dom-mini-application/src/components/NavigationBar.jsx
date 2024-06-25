import { Image, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Row className="bg-dark">
        <Col sm={6}>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <Image src="/logo192.png" height={60} />
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  Product
                </Nav.Link>
                <Nav.Link as={Link} to="/pricing">
                  Pricing
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
        <Col className="text-white d-flex justify-content-end" sm={6}>
          User : ??
        </Col>
      </Row>
    </>
  );
}

export default NavigationBar;
