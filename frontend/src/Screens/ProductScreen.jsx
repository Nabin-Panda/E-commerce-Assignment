import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";

const ProductScreen = ({ product }) => {
  return (
    <>
      <LinkContainer to={`/product/${product._id}`}>
        <Card className="my-3 p-3 rounded">
          <Card.Img src={product.image} variant="top" />

          <Card.Body>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>

            <Card.Text as="div">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>
            <Card.Text as="div">$ {product.price}</Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
    </>
  );
};

export default ProductScreen;
