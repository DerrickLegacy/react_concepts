import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <div className="d-flex align-items-center justify-content-end">
          {/* <div>
            <Image src="/logo192.png" height={30} alt="Logo" />
          </div> */}
          <Nav>
            <Nav.Link as={Link} to="/home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="text-light">
              Pricing
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
