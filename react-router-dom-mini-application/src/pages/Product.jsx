import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import products from "../Database/ProductsData";
function Product() {
  const [showAllProducts, setShowAllProducts] = useState(true);
  console.log(products);
  return (
    <>
      <div className="d-flex align-item-center  justify-content-center ">
        <h1>
          <span className="text-danger">Available Products'</span>
        </h1>
      </div>
      {showAllProducts ? (
        <Row>
          {products.map((product) => {
            return (
              <Col xm={4} key={product.id} className="mt-1 mb-1">
                <Card style={{ width: "18rem", height: "400px" }}>
                  <Card.Img
                    variant="top"
                    src={product.imageUrl}
                    style={{ height: "200px", objectFit: "cover" }}
                  />{" "}
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {product.category}
                    </Card.Subtitle>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Link to={`/products/${product.id}`}>
                      <Button
                        onClick={() => {
                          setShowAllProducts(false);
                        }}
                        variant="primary"
                      >
                        Details
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      )}
    </>
  );
}

export default Product;
