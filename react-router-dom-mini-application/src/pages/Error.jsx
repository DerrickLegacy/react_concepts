import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center"
        style={{ height: "85vh" }}
      >
        <div className="text-center">
          <Row>
            <Col>
              <Image
                src="/images/—Pngtree—emoticon background with 3d podium_8461439.jpg"
                height={300}
                style={{ borderRadius: "5%" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>404</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>page not found</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/">Back Home</Link>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Error;
